import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { DestinationTitle } from "../destination/DestinationTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="comment" multiline source="comment" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="destination.id"
          reference="Destination"
          label="destination"
        >
          <SelectInput optionText={DestinationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
