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
exports.V1ServiceAccount = void 0;
/**
* ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
*/
class V1ServiceAccount {
    static getAttributeTypeMap() {
        return V1ServiceAccount.attributeTypeMap;
    }
}
exports.V1ServiceAccount = V1ServiceAccount;
V1ServiceAccount.discriminator = undefined;
V1ServiceAccount.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "automountServiceAccountToken",
        "baseName": "automountServiceAccountToken",
        "type": "boolean"
    },
    {
        "name": "imagePullSecrets",
        "baseName": "imagePullSecrets",
        "type": "Array<V1LocalObjectReference>"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta"
    },
    {
        "name": "secrets",
        "baseName": "secrets",
        "type": "Array<V1ObjectReference>"
    }
];
//# sourceMappingURL=v1ServiceAccount.js.map