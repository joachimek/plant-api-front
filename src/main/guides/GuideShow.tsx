import React from 'react'
import {
  FunctionField,
  ReferenceField,
  Show,
  ShowProps,
  Tab,
  TabbedShowLayout,
  TextField,
  useShowContext,
} from 'react-admin'
import { ResourceName } from '../../core/ResourceName'
import { GuideDto } from '../../core/dto/guides/GuideDto'

const GuideShowLayout = ({ ...props }) => {
  const { record } = useShowContext<GuideDto>()

  return (
    <TabbedShowLayout {...props}>
      <Tab label="general">
        <TextField source="id" />
        {record?.info && <TextField source="info" />}
        <ReferenceField
          source="userID"
          label="User"
          reference={ResourceName.USERS}
        />
        <ReferenceField
          source="speciesID"
          label="Species"
          reference={ResourceName.SPECIES}
        />
        {record?.maxHumidity !== undefined && (
          <FunctionField<GuideDto>
            source="maxHumidity"
            render={(record?: GuideDto) => `${record?.maxHumidity}%`}
          />
        )}
        {record?.minHumidity !== undefined && (
          <FunctionField<GuideDto>
            source="minHumidity"
            render={(record?: GuideDto) => `${record?.minHumidity}%`}
          />
        )}
        {record?.airHumidity !== undefined && (
          <FunctionField<GuideDto>
            source="airHumidity"
            render={(record?: GuideDto) => `${record?.airHumidity}%`}
          />
        )}
        {record?.sunlightTime !== undefined && (
          <FunctionField<GuideDto>
            source="sunlightTime"
            render={(record?: GuideDto) => `${record?.sunlightTime}%`}
          />
        )}
      </Tab>
      <Tab label="reviews">
        <div>reviews</div>
      </Tab>
    </TabbedShowLayout>
  )
}

export const GuideShow = (props: ShowProps) => (
  <Show {...props}>
    <GuideShowLayout />
  </Show>
)
