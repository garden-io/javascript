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
* StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
*/
class V1beta1StatefulSetUpdateStrategy {
    static getAttributeTypeMap() {
        return V1beta1StatefulSetUpdateStrategy.attributeTypeMap;
    }
}
V1beta1StatefulSetUpdateStrategy.discriminator = undefined;
V1beta1StatefulSetUpdateStrategy.attributeTypeMap = [
    {
        "name": "rollingUpdate",
        "baseName": "rollingUpdate",
        "type": "V1beta1RollingUpdateStatefulSetStrategy"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V1beta1StatefulSetUpdateStrategy = V1beta1StatefulSetUpdateStrategy;
//# sourceMappingURL=v1beta1StatefulSetUpdateStrategy.js.map