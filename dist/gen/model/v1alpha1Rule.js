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
* Rule is a tuple of APIGroups, APIVersion, and Resources.It is recommended to make sure that all the tuple expansions are valid.
*/
class V1alpha1Rule {
    static getAttributeTypeMap() {
        return V1alpha1Rule.attributeTypeMap;
    }
}
V1alpha1Rule.discriminator = undefined;
V1alpha1Rule.attributeTypeMap = [
    {
        "name": "apiGroups",
        "baseName": "apiGroups",
        "type": "Array<string>"
    },
    {
        "name": "apiVersions",
        "baseName": "apiVersions",
        "type": "Array<string>"
    },
    {
        "name": "resources",
        "baseName": "resources",
        "type": "Array<string>"
    }
];
exports.V1alpha1Rule = V1alpha1Rule;
//# sourceMappingURL=v1alpha1Rule.js.map