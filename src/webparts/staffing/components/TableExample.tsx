import * as React from 'react';
import { Table } from '@headstorm/foundry-react-ui';
import { IStaffingTableProp } from './IStaffingTableProps';
import { name, address, company } from 'faker';

export default class TableExample extends React.Component<IStaffingTableProp, {}> {
public render(): JSX.Element {
    const generateSampleData = (rows: number): IStaffingTableProp[] => {
        const finalData = [];
        for (let i = 0; i < rows; i += 1) {
          finalData.push({
            name: name.findName(),
            title: name.title(),
            address: address.streetAddress(),
            notes: company.catchPhrase(),
          });
        }
        return finalData;
    };

    const sampleData: any[] = generateSampleData(10);
    console.log(sampleData);

    const sampleColumns: { [index: string]: any } = {
        selection: {
          name: '',
          width: '2rem',
          sortable: false,
        },
        name: {
          name: 'Name',
          width: '1fr',
        },
        title: {
          name: 'Title',
          width: '1fr',
        },
        address: {
          name: 'Address',
          width: '1fr',
        },
        notes: {
          name: 'Notes',
          width: '12rem',
          minTableWidth: 800,
          sortFunction: (a: string, b: string) => (a.length > b.length ? -1 : 1),
        },
        action: {
          name: '',
          sortable: false,
          width: '1rem',
        },
      };
  
    return (
        <Table
            columns={sampleColumns}
            data={sampleData}
        />
    );
  }}