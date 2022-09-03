import { AuthProvider } from 'react-admin'
import { LOGIN_URL } from '../api-urls'
import { authPost } from '../common/fetch.utils'
import { AuthRequest } from './auth.request'
import userProvider, { GetOneUserParams } from '../users/user.provider'
import { ResourceName } from '../ResourceName'

const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const token = await authPost<AuthRequest, string>(LOGIN_URL, {
      login: username,
      password,
    })
    localStorage.setItem('username', username)
    localStorage.setItem('token', token)
  },
  logout: () => {
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    return Promise.resolve()
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username')
      localStorage.removeItem('token')
      return Promise.reject()
    }
    return Promise.resolve()
  },
  checkAuth: async () => {
    const token = localStorage.getItem('token')
    if (token)
      return Promise.resolve()
    return Promise.reject()
  },
  getPermissions: async (): Promise<string> => {
    const username = localStorage.getItem('username')
    const { data: currentUser } = await userProvider.getOne(ResourceName.USERS, { username: username as string } as GetOneUserParams)
    const { role } = currentUser
    return Promise.resolve(role)
  },
  getIdentity: () =>
    Promise.resolve({
      id: localStorage.getItem('username') as string,
    }),
}

export default authProvider
