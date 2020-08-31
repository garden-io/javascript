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
* DeploymentStatus is the most recently observed status of the Deployment.
*/
class ExtensionsV1beta1DeploymentStatus {
    static getAttributeTypeMap() {
        return ExtensionsV1beta1DeploymentStatus.attributeTypeMap;
    }
}
ExtensionsV1beta1DeploymentStatus.discriminator = undefined;
ExtensionsV1beta1DeploymentStatus.attributeTypeMap = [
    {
        "name": "availableReplicas",
        "baseName": "availableReplicas",
        "type": "number"
    },
    {
        "name": "collisionCount",
        "baseName": "collisionCount",
        "type": "number"
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<ExtensionsV1beta1DeploymentCondition>"
    },
    {
        "name": "observedGeneration",
        "baseName": "observedGeneration",
        "type": "number"
    },
    {
        "name": "readyReplicas",
        "baseName": "readyReplicas",
        "type": "number"
    },
    {
        "name": "replicas",
        "baseName": "replicas",
        "type": "number"
    },
    {
        "name": "unavailableReplicas",
        "baseName": "unavailableReplicas",
        "type": "number"
    },
    {
        "name": "updatedReplicas",
        "baseName": "updatedReplicas",
        "type": "number"
    }
];
exports.ExtensionsV1beta1DeploymentStatus = ExtensionsV1beta1DeploymentStatus;
//# sourceMappingURL=extensionsV1beta1DeploymentStatus.js.map