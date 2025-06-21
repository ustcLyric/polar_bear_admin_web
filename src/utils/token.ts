// 封装本地存储存储数据与读取数据的方法
export const SET_TOKEN = (token: string) => {
    localStorage.setItem('POLAR_BEAR_TOKEN', token);
}

export const GET_TOKEN = () => {
    return localStorage.getItem('POLAR_BEAR_TOKEN');
}

export const REMOVE_TOKEN = () => {
    localStorage.removeItem('POLAR_BEAR_TOKEN');
}

