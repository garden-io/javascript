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
exports.V1ServicePort = void 0;
/**
* ServicePort contains information on service\'s port.
*/
class V1ServicePort {
    static getAttributeTypeMap() {
        return V1ServicePort.attributeTypeMap;
    }
}
exports.V1ServicePort = V1ServicePort;
V1ServicePort.discriminator = undefined;
V1ServicePort.attributeTypeMap = [
    {
        "name": "appProtocol",
        "baseName": "appProtocol",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "nodePort",
        "baseName": "nodePort",
        "type": "number"
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "number"
    },
    {
        "name": "protocol",
        "baseName": "protocol",
        "type": "string"
    },
    {
        "name": "targetPort",
        "baseName": "targetPort",
        "type": "object"
    }
];
//# sourceMappingURL=v1ServicePort.js.map