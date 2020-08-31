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
exports.V1SecretEnvSource = void 0;
/**
* SecretEnvSource selects a Secret to populate the environment variables with.  The contents of the target Secret\'s Data field will represent the key-value pairs as environment variables.
*/
class V1SecretEnvSource {
    static getAttributeTypeMap() {
        return V1SecretEnvSource.attributeTypeMap;
    }
}
exports.V1SecretEnvSource = V1SecretEnvSource;
V1SecretEnvSource.discriminator = undefined;
V1SecretEnvSource.attributeTypeMap = [
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
//# sourceMappingURL=v1SecretEnvSource.js.map