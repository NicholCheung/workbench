import request from '../utils/http/request';

export function query() {
  return request('/api/users');
}
