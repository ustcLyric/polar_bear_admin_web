import request from "@/utils/request/request.ts";
import type {
    GetPermissionsRequest, GetRolesRequest, GetRolesResponse, GetUserInfoRequest, GetUserInfoResponse,
    UserLoginRequest,
    UserLoginResponse,
    UserRegisterRequest,
    UserRegisterResponse
} from "@/api/user/type.ts";

enum UserApi {
    USER_REGISTER = '/api/UserRegister',
    USER_LOGIN = '/api/UserLogin',
    GET_USER_INFO = '/api/GetUserInfo',
    GET_PERMISSIONS = '/api/GetPermissions',
    GET_ROLES = '/api/GetRoles',
}

// 用户注册接口
export const userRegisterApi = (req: UserRegisterRequest) => request.post<UserRegisterResponse>(UserApi.USER_REGISTER, req)
// 用户登录接口
// userLoginApi 接口定义：第一个泛型（<T>）表示请求的返回类型，第二个泛型（<R>）表示请求参数的类型。
// 此处 request.post<T, R>(url, body) 的第一个 any 表示返回数据的类型未明确，第二个 any 表示传入的请求体类型未明确。
export const userLoginApi = (req: UserLoginRequest) => request.post<UserLoginResponse>(UserApi.USER_LOGIN, req)

//获取用户信息
export const getUserInfoApi = (req: GetUserInfoRequest) => request.post<GetUserInfoResponse>(UserApi.GET_USER_INFO, req)

//获取权限菜单信息
export const getPermissionsApi = (req: GetPermissionsRequest) => request.post<GetUserInfoResponse>(UserApi.GET_PERMISSIONS, req)

//获取角色信息
export const getRolesApi = (req: GetRolesRequest) => request.post<GetRolesResponse>(UserApi.GET_ROLES, req)
