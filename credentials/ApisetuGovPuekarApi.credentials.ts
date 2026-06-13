import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovPuekarApi implements ICredentialType {
        name = 'N8nDevApisetuGovPuekarApi';

        displayName = 'Apisetu Gov Puekar API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovPuekar/apisetu-gov-puekar.svg', dark: 'file:../nodes/ApisetuGovPuekar/apisetu-gov-puekar.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/puekar/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/puekar/v3',
                        description: 'The base URL of your Apisetu Gov Puekar API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
