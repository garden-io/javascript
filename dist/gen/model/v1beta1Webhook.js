"use strict";
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.10
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Webhook describes an admission webhook and the resources and operations it applies to.
*/
class V1beta1Webhook {
    static getAttributeTypeMap() {
        return V1beta1Webhook.attributeTypeMap;
    }
}
V1beta1Webhook.discriminator = undefined;
V1beta1Webhook.attributeTypeMap = [
    {
        "name": "clientConfig",
        "baseName": "clientConfig",
        "type": "AdmissionregistrationV1beta1WebhookClientConfig"
    },
    {
        "name": "failurePolicy",
        "baseName": "failurePolicy",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "namespaceSelector",
        "baseName": "namespaceSelector",
        "type": "V1LabelSelector"
    },
    {
        "name": "rules",
        "baseName": "rules",
        "type": "Array<V1beta1RuleWithOperations>"
    },
    {
        "name": "sideEffects",
        "baseName": "sideEffects",
        "type": "string"
    }
];
exports.V1beta1Webhook = V1beta1Webhook;
//# sourceMappingURL=v1beta1Webhook.js.map