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
import { V1beta1RollingUpdateDaemonSet } from './v1beta1RollingUpdateDaemonSet';
export declare class V1beta1DaemonSetUpdateStrategy {
    'rollingUpdate'?: V1beta1RollingUpdateDaemonSet;
    /**
    * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is OnDelete.
    */
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
