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
exports.V1beta1CustomResourceValidation = void 0;
/**
* CustomResourceValidation is a list of validation methods for CustomResources.
*/
class V1beta1CustomResourceValidation {
    static getAttributeTypeMap() {
        return V1beta1CustomResourceValidation.attributeTypeMap;
    }
}
exports.V1beta1CustomResourceValidation = V1beta1CustomResourceValidation;
V1beta1CustomResourceValidation.discriminator = undefined;
V1beta1CustomResourceValidation.attributeTypeMap = [
    {
        "name": "openAPIV3Schema",
        "baseName": "openAPIV3Schema",
        "type": "V1beta1JSONSchemaProps"
    }
];
//# sourceMappingURL=v1beta1CustomResourceValidation.js.map