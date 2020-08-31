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
* DeploymentList is a list of Deployments.
*/
class ExtensionsV1beta1DeploymentList {
    static getAttributeTypeMap() {
        return ExtensionsV1beta1DeploymentList.attributeTypeMap;
    }
}
ExtensionsV1beta1DeploymentList.discriminator = undefined;
ExtensionsV1beta1DeploymentList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<ExtensionsV1beta1Deployment>"
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
exports.ExtensionsV1beta1DeploymentList = ExtensionsV1beta1DeploymentList;
//# sourceMappingURL=extensionsV1beta1DeploymentList.js.map