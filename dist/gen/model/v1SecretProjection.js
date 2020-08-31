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
exports.V1SecretProjection = void 0;
/**
* Adapts a secret into a projected volume.  The contents of the target Secret\'s Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
*/
class V1SecretProjection {
    static getAttributeTypeMap() {
        return V1SecretProjection.attributeTypeMap;
    }
}
exports.V1SecretProjection = V1SecretProjection;
V1SecretProjection.discriminator = undefined;
V1SecretProjection.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1KeyToPath>"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "optional",
        "baseName": "optional",
        "type": "boolean"
    }
];
//# sourceMappingURL=v1SecretProjection.js.map