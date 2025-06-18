//用户注册请求
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

