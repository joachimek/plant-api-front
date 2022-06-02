import React, { useCallback, useEffect, useState } from "react"
import { Datagrid, Show, ShowProps, SimpleShowLayout, Tab, TabbedShowLayout, TextField, useShowContext } from "react-admin"
import { ResourceName } from "../../core/ResourceName"
import plantHistProvider from "../../core/plants-hist/plants-hist.provider"

const DevicePlantTab = () => {
  const { isFetching, isLoading, record } = useShowContext()

  return (!isFetching && !isLoading && record?.plantID && record?.plantID !== -1) ? (
    <>
      <h3>plant</h3>
      <Show resource={ResourceName.PLANTS} id={record?.plantID}>
        <SimpleShowLayout>
          <TextField source="id" />
          <TextField source="name" />
        </SimpleShowLayout>
      </Show>
    </>
  ) : (
    <h4>no plant to show</h4>
  )
}

//TODO: related actions
const DeviceHistoryTab = () => {
  const { record } = useShowContext()
  const [history, setHistory] = useState<any[]>([])

  const getHistoryCallback = useCallback(async () => {
    const fetchHistory = await plantHistProvider.getByPlant(ResourceName.PLANTS_HIST, { id: record?.plandID })
    console.log(fetchHistory)
  }, [record])

  useEffect(() => {
    if(record?.plandID)
      getHistoryCallback()
  }, [getHistoryCallback])

  /*
  return(
    <Datagrid resource={ResourceName.PLANTS_HIST} data={history as any[]}>
      <TextField source="id" />
    </Datagrid>
  )
  */

  return (
    <div />
  )
}

const DeviceShowLayout = ({ ...props }) => {
  const { isFetching, isLoading, record } = useShowContext()

  return (
    <TabbedShowLayout {...props}>
      <Tab label="general">
        <TextField source="id" />
        <TextField source="name" />
      </Tab>
      {(!isFetching && !isLoading && record?.plantID && record?.plantID !== -1) &&
        <Tab label="plant">
          <DevicePlantTab />
        </Tab>}
    </TabbedShowLayout>
  )
}

export const DeviceShow = (props: ShowProps) => (
  <Show {...props}>
    <DeviceShowLayout />
  </Show>
)