import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'StaffingWebPartStrings';
import Staffing from './components/Staffing';
import { IStaffingProps } from './components/IStaffingProps';
import { IStaffingTableProp } from './components/IStaffingTableProps';
import TableExample from './components/TableExample';

export interface IStaffingWebPartProps {
  description: string;
}

export default class StaffingWebPart extends BaseClientSideWebPart<IStaffingTableProp> {

  public render(): void {
    const element: React.ReactElement<IStaffingTableProp> = React.createElement(
      TableExample
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
