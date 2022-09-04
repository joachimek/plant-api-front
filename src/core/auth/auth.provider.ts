import { AuthProvider } from 'react-admin'
import { LOGIN_URL, USERS_URL } from '../api-urls'
import { authHeaders, authPost, getBase } from '../common/fetch.utils'
import { AuthRequest } from './auth.request'
import { UserDto } from '../dto/UserDto'

const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const { token } = await authPost<AuthRequest, { token: string }>(
      LOGIN_URL,
      {
        username,
        password,
      },
    )
    localStorage.setItem('username', username)
    localStorage.setItem('token', token)

    //role and userId
    const { role, id } = await getBase<UserDto>(
      `${USERS_URL}/${username}`,
      authHeaders(token),
    )

    localStorage.setItem('role', role)
    localStorage.setItem('userId', id.toString())
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
    if (token) return Promise.resolve()
    return Promise.reject()
  },
  getPermissions: async (): Promise<string> => {
    const role = localStorage.getItem('role')
    return Promise.resolve(role as string)
  },
  getIdentity: () =>
    Promise.resolve({
      id: localStorage.getItem('userId') as string,
      username: localStorage.getItem('username') as string,
    }),
}

export default authProvider
