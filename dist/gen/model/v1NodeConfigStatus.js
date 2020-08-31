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
exports.V1NodeConfigStatus = void 0;
/**
* NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource.
*/
class V1NodeConfigStatus {
    static getAttributeTypeMap() {
        return V1NodeConfigStatus.attributeTypeMap;
    }
}
exports.V1NodeConfigStatus = V1NodeConfigStatus;
V1NodeConfigStatus.discriminator = undefined;
V1NodeConfigStatus.attributeTypeMap = [
    {
        "name": "active",
        "baseName": "active",
        "type": "V1NodeConfigSource"
    },
    {
        "name": "assigned",
        "baseName": "assigned",
        "type": "V1NodeConfigSource"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "string"
    },
    {
        "name": "lastKnownGood",
        "baseName": "lastKnownGood",
        "type": "V1NodeConfigSource"
    }
];
//# sourceMappingURL=v1NodeConfigStatus.js.map