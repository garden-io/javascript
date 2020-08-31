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
exports.V1alpha1RuntimeClassSpec = void 0;
/**
* RuntimeClassSpec is a specification of a RuntimeClass. It contains parameters that are required to describe the RuntimeClass to the Container Runtime Interface (CRI) implementation, as well as any other components that need to understand how the pod will be run. The RuntimeClassSpec is immutable.
*/
class V1alpha1RuntimeClassSpec {
    static getAttributeTypeMap() {
        return V1alpha1RuntimeClassSpec.attributeTypeMap;
    }
}
exports.V1alpha1RuntimeClassSpec = V1alpha1RuntimeClassSpec;
V1alpha1RuntimeClassSpec.discriminator = undefined;
V1alpha1RuntimeClassSpec.attributeTypeMap = [
    {
        "name": "overhead",
        "baseName": "overhead",
        "type": "V1alpha1Overhead"
    },
    {
        "name": "runtimeHandler",
        "baseName": "runtimeHandler",
        "type": "string"
    },
    {
        "name": "scheduling",
        "baseName": "scheduling",
        "type": "V1alpha1Scheduling"
    }
];
//# sourceMappingURL=v1alpha1RuntimeClassSpec.js.map