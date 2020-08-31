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
exports.V1beta1RuntimeClassStrategyOptions = void 0;
/**
* RuntimeClassStrategyOptions define the strategy that will dictate the allowable RuntimeClasses for a pod.
*/
class V1beta1RuntimeClassStrategyOptions {
    static getAttributeTypeMap() {
        return V1beta1RuntimeClassStrategyOptions.attributeTypeMap;
    }
}
exports.V1beta1RuntimeClassStrategyOptions = V1beta1RuntimeClassStrategyOptions;
V1beta1RuntimeClassStrategyOptions.discriminator = undefined;
V1beta1RuntimeClassStrategyOptions.attributeTypeMap = [
    {
        "name": "allowedRuntimeClassNames",
        "baseName": "allowedRuntimeClassNames",
        "type": "Array<string>"
    },
    {
        "name": "defaultRuntimeClassName",
        "baseName": "defaultRuntimeClassName",
        "type": "string"
    }
];
//# sourceMappingURL=v1beta1RuntimeClassStrategyOptions.js.map