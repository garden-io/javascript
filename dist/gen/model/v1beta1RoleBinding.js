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
exports.V1beta1RoleBinding = void 0;
/**
* RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleBinding, and will no longer be served in v1.20.
*/
class V1beta1RoleBinding {
    static getAttributeTypeMap() {
        return V1beta1RoleBinding.attributeTypeMap;
    }
}
exports.V1beta1RoleBinding = V1beta1RoleBinding;
V1beta1RoleBinding.discriminator = undefined;
V1beta1RoleBinding.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
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
        "name": "roleRef",
        "baseName": "roleRef",
        "type": "V1beta1RoleRef"
    },
    {
        "name": "subjects",
        "baseName": "subjects",
        "type": "Array<V1beta1Subject>"
    }
];
//# sourceMappingURL=v1beta1RoleBinding.js.map