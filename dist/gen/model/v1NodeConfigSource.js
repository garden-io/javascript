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
exports.V1NodeConfigSource = void 0;
/**
* NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil.
*/
class V1NodeConfigSource {
    static getAttributeTypeMap() {
        return V1NodeConfigSource.attributeTypeMap;
    }
}
exports.V1NodeConfigSource = V1NodeConfigSource;
V1NodeConfigSource.discriminator = undefined;
V1NodeConfigSource.attributeTypeMap = [
    {
        "name": "configMap",
        "baseName": "configMap",
        "type": "V1ConfigMapNodeConfigSource"
    }
];
//# sourceMappingURL=v1NodeConfigSource.js.map