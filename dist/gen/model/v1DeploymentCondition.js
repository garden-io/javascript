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
exports.V1DeploymentCondition = void 0;
/**
* DeploymentCondition describes the state of a deployment at a certain point.
*/
class V1DeploymentCondition {
    static getAttributeTypeMap() {
        return V1DeploymentCondition.attributeTypeMap;
    }
}
exports.V1DeploymentCondition = V1DeploymentCondition;
V1DeploymentCondition.discriminator = undefined;
V1DeploymentCondition.attributeTypeMap = [
    {
        "name": "lastTransitionTime",
        "baseName": "lastTransitionTime",
        "type": "Date"
    },
    {
        "name": "lastUpdateTime",
        "baseName": "lastUpdateTime",
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
//# sourceMappingURL=v1DeploymentCondition.js.map