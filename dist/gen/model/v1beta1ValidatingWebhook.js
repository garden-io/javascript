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
exports.V1beta1ValidatingWebhook = void 0;
/**
* ValidatingWebhook describes an admission webhook and the resources and operations it applies to.
*/
class V1beta1ValidatingWebhook {
    static getAttributeTypeMap() {
        return V1beta1ValidatingWebhook.attributeTypeMap;
    }
}
exports.V1beta1ValidatingWebhook = V1beta1ValidatingWebhook;
V1beta1ValidatingWebhook.discriminator = undefined;
V1beta1ValidatingWebhook.attributeTypeMap = [
    {
        "name": "admissionReviewVersions",
        "baseName": "admissionReviewVersions",
        "type": "Array<string>"
    },
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
        "name": "matchPolicy",
        "baseName": "matchPolicy",
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
        "name": "objectSelector",
        "baseName": "objectSelector",
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
    },
    {
        "name": "timeoutSeconds",
        "baseName": "timeoutSeconds",
        "type": "number"
    }
];
//# sourceMappingURL=v1beta1ValidatingWebhook.js.map