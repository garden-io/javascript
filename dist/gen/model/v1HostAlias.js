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
exports.V1HostAlias = void 0;
/**
* HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod\'s hosts file.
*/
class V1HostAlias {
    static getAttributeTypeMap() {
        return V1HostAlias.attributeTypeMap;
    }
}
exports.V1HostAlias = V1HostAlias;
V1HostAlias.discriminator = undefined;
V1HostAlias.attributeTypeMap = [
    {
        "name": "hostnames",
        "baseName": "hostnames",
        "type": "Array<string>"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
//# sourceMappingURL=v1HostAlias.js.map