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
exports.V1PodSecurityContext = void 0;
/**
* PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
*/
class V1PodSecurityContext {
    static getAttributeTypeMap() {
        return V1PodSecurityContext.attributeTypeMap;
    }
}
exports.V1PodSecurityContext = V1PodSecurityContext;
V1PodSecurityContext.discriminator = undefined;
V1PodSecurityContext.attributeTypeMap = [
    {
        "name": "fsGroup",
        "baseName": "fsGroup",
        "type": "number"
    },
    {
        "name": "fsGroupChangePolicy",
        "baseName": "fsGroupChangePolicy",
        "type": "string"
    },
    {
        "name": "runAsGroup",
        "baseName": "runAsGroup",
        "type": "number"
    },
    {
        "name": "runAsNonRoot",
        "baseName": "runAsNonRoot",
        "type": "boolean"
    },
    {
        "name": "runAsUser",
        "baseName": "runAsUser",
        "type": "number"
    },
    {
        "name": "seLinuxOptions",
        "baseName": "seLinuxOptions",
        "type": "V1SELinuxOptions"
    },
    {
        "name": "supplementalGroups",
        "baseName": "supplementalGroups",
        "type": "Array<number>"
    },
    {
        "name": "sysctls",
        "baseName": "sysctls",
        "type": "Array<V1Sysctl>"
    },
    {
        "name": "windowsOptions",
        "baseName": "windowsOptions",
        "type": "V1WindowsSecurityContextOptions"
    }
];
//# sourceMappingURL=v1PodSecurityContext.js.map