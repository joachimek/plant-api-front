import { Dialog, DialogProps } from '@mui/material'
import React, { Children, ReactElement, cloneElement } from 'react'
import { CreateBase, CreateProps, EditBase, EditProps } from 'react-admin'

export interface CreateDialogProps
  extends Omit<CreateProps, 'classes'>,
    Omit<DialogProps, 'id' | 'title' | 'sx'> {
  children?: ReactElement
  handleClose: () => void
}

export const CreateDialog = ({
  children,
  open,
  title,
  handleClose,
  ...props
}: CreateDialogProps): ReactElement => (
  <Dialog
    open={open}
    aria-labelledby="create-dialog-title"
    onClose={handleClose}
  >
    <CreateBase {...props}>
      {cloneElement(Children.only(children as any), props)}
    </CreateBase>
  </Dialog>
)

export interface EditDialogProps
  extends Omit<EditProps, 'classes'>,
    Omit<DialogProps, 'id' | 'title' | 'sx'> {
  children?: ReactElement
  handleClose: () => void
}

export const EditDialog = ({
  children,
  open,
  title,
  handleClose,
  ...props
}: CreateDialogProps): ReactElement => (
  <Dialog
    open={open}
    aria-labelledby="create-dialog-title"
    onClose={handleClose}
  >
    <EditBase {...props}>
      {cloneElement(Children.only(children as any), props)}
    </EditBase>
  </Dialog>
)
