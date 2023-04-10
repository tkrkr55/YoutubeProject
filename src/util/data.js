import { format, render, cancel, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko'
register('ko',koLocale)

// 데이터를 한글로 표시하고 싶을때 사용하면 되는데 utill 파일을 만들어서
// 사용하고 싶을때마다 formatAgo에 매개변수로 보내줘서 사용하면 된다
//  기본 디폴트 값은 en_US 이다.

export function formatAgo(date,lang = 'en_US'){
  return format(date,lang)
}