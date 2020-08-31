"use strict";
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ValidatingWebhookConfigurationList = void 0;
/**
* ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
*/
class V1ValidatingWebhookConfigurationList {
    static getAttributeTypeMap() {
        return V1ValidatingWebhookConfigurationList.attributeTypeMap;
    }
}
exports.V1ValidatingWebhookConfigurationList = V1ValidatingWebhookConfigurationList;
V1ValidatingWebhookConfigurationList.discriminator = undefined;
V1ValidatingWebhookConfigurationList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1ValidatingWebhookConfiguration>"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ListMeta"
    }
];
//# sourceMappingURL=v1ValidatingWebhookConfigurationList.js.map