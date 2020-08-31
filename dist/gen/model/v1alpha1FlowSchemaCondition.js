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
exports.V1alpha1FlowSchemaCondition = void 0;
/**
* FlowSchemaCondition describes conditions for a FlowSchema.
*/
class V1alpha1FlowSchemaCondition {
    static getAttributeTypeMap() {
        return V1alpha1FlowSchemaCondition.attributeTypeMap;
    }
}
exports.V1alpha1FlowSchemaCondition = V1alpha1FlowSchemaCondition;
V1alpha1FlowSchemaCondition.discriminator = undefined;
V1alpha1FlowSchemaCondition.attributeTypeMap = [
    {
        "name": "lastTransitionTime",
        "baseName": "lastTransitionTime",
        "type": "Date"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=v1alpha1FlowSchemaCondition.js.map