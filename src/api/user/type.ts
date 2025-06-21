//注册用户
export interface UserRegisterRequest {
    //用户姓名
    user_name?: string;
    //账户名
    account_name?: string;
    //手机号
    phone?: string;
    //密码
    password?: string;
    //邮箱
    email?: string;
    //身份证号
    id_card?: string;
    //昵称 (可选)
    nickname?: string;
    //头像 (可选)
    avatar?: string;
    //地址 (可选)
    address?: string;
    //性别 (可选)
    sex?: string;
    //省份 (可选)
    province?: string;
    //城市 (可选)
    city?: string;
    //区县 (可选)
    district?: string;
    //注册来源 (可选)
    registration_source?: string;
    //安全问题 (可选)
    security_question?: string;
    //安全问题答案 (可选)
    security_answer?: string;
}

//用户注册响应
export interface UserRegisterResponse {
    //用户token
    token?: string;
    //过期时间
    expire?: string;
}

//用户登陆请求
export interface UserLoginRequest {
    //用户名
    user_name?: string;
    //账户名
    account_name?: string;
    //手机号
    phone?: string;
    //密码
    password?: string;
}

//用户登陆响应
export interface UserLoginResponse {
    //用户token
    token?: string;
    //过期时间
    expire?: string;
}

//用户信息获取
export interface GetUserInfoRequest {
}

export interface GetUserInfoResponse {
    //1.权限信息
    role_info?: RoleInfo;
    //2.菜单信息
    menu_info?: UserPermissionInfo[];
    //3.基本信息
    user_info?: UserInfo;
}

export interface RoleInfo {
    role_id?: string;
    role_name?: string;
    role_desc?: string;
}

export interface UserPermissionInfo {
    //菜单名称
    permission_name?: string;
    //菜单编码
    permission_code?: string;
    //权限值
    permission_value?: string;
    //菜单父id
    permission_parent_id?: string;
    //类型 0表示菜单 1表示按钮
    permission_type?: number;
    //访问路径
    path?: string;
    //组件路径
    component?: string;
    //图标
    icon?: string;
    //逻辑删除标记，0表示未删除，1表示已删除
    is_deleted?: number;
    //创建时间
    created_at?: string;
    //修改时间
    updated_at?: string;
}

export interface UserInfo {
    //用户id
    user_id?: string;
    //用户姓名
    user_name?: string;
    //身份证
    id_card?: string;
    //用户头像
    avatar?: string;
    //用户昵称
    nickname?: string;
    //手机号
    phone?: string;
    //密码
    password?: string;
    //当前位置
    address?: string;
    //个人邮箱
    email?: string;
    //逻辑删除标记
    is_delete?: boolean;
    //用户性别
    sex?: number;
    //创建时间
    created_at?: Date;
    //修改时间
    updated_at?: Date;
    //用户角色
    role?: string;
    //用户状态
    status?: number;
    //记录创建者的用户ID
    created_by?: string;
    //最后一次登录时间
    last_login?: Date;
    //用户登录次数
    login_count?: number;
    //省份
    province?: string;
    //城市
    city?: string;
    //区县
    district?: string;
    //注册来源
    registration_source?: string;
    //安全问题
    security_question?: string;
    //安全问题答案
    security_answer?: string;
}

//菜单信息获取请求
export interface GetPermissionsRequest {
}

//菜单信息获取响应
export interface GetPermissionsResponse {
    permissions?: Permission[];
}

//角色信息获取请求
export interface GetRolesRequest {
}

//角色信息获取响应
export interface GetRolesResponse {
    roles?: Role[];
}

//菜单权限消息
export interface Permission {
    //菜单id
    permission_id?: string;
    //菜单名称
    permission_name?: string;
    //菜单编码
    permission_code?: string;
    //权限值
    permission_value?: string;
    //菜单父id
    permission_parent_id?: string;
    //类型 0表示菜单 1表示按钮
    permission_type?: number;
    //访问路径
    path?: string;
    //组件路径
    component?: string;
    //图标
    icon?: string;
    //逻辑删除标记
    is_deleted?: boolean;
    //创建时间
    created_at?: string;
    //修改时间
    updated_at?: string;
}

//角色消息
export interface Role {
    //角色id
    role_id?: string;
    //角色名称
    role_name?: string;
    //角色编码
    role_code?: string;
    //备注
    remark?: string;
    //逻辑删除标记，0表示未删除，1表示已删除
    is_deleted?: boolean;
    //创建时间
    created_at?: string;
    //修改时间
    updated_at?: string;
}
