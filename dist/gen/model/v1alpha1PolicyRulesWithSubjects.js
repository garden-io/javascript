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
exports.V1alpha1PolicyRulesWithSubjects = void 0;
/**
* PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
*/
class V1alpha1PolicyRulesWithSubjects {
    static getAttributeTypeMap() {
        return V1alpha1PolicyRulesWithSubjects.attributeTypeMap;
    }
}
exports.V1alpha1PolicyRulesWithSubjects = V1alpha1PolicyRulesWithSubjects;
V1alpha1PolicyRulesWithSubjects.discriminator = undefined;
V1alpha1PolicyRulesWithSubjects.attributeTypeMap = [
    {
        "name": "nonResourceRules",
        "baseName": "nonResourceRules",
        "type": "Array<V1alpha1NonResourcePolicyRule>"
    },
    {
        "name": "resourceRules",
        "baseName": "resourceRules",
        "type": "Array<V1alpha1ResourcePolicyRule>"
    },
    {
        "name": "subjects",
        "baseName": "subjects",
        "type": "Array<FlowcontrolV1alpha1Subject>"
    }
];
//# sourceMappingURL=v1alpha1PolicyRulesWithSubjects.js.map