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
exports.V1SubjectAccessReviewSpec = void 0;
/**
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
class V1SubjectAccessReviewSpec {
    static getAttributeTypeMap() {
        return V1SubjectAccessReviewSpec.attributeTypeMap;
    }
}
exports.V1SubjectAccessReviewSpec = V1SubjectAccessReviewSpec;
V1SubjectAccessReviewSpec.discriminator = undefined;
V1SubjectAccessReviewSpec.attributeTypeMap = [
    {
        "name": "extra",
        "baseName": "extra",
        "type": "{ [key: string]: Array<string>; }"
    },
    {
        "name": "groups",
        "baseName": "groups",
        "type": "Array<string>"
    },
    {
        "name": "nonResourceAttributes",
        "baseName": "nonResourceAttributes",
        "type": "V1NonResourceAttributes"
    },
    {
        "name": "resourceAttributes",
        "baseName": "resourceAttributes",
        "type": "V1ResourceAttributes"
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "string"
    }
];
//# sourceMappingURL=v1SubjectAccessReviewSpec.js.map