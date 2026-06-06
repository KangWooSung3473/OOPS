export const formattedDate = (dateObj)=>{
    // 백엔드에서 UTC로 오는 시간을 KST로 변환
    const dateStr = typeof dateObj === 'string' && !dateObj.endsWith('Z') && !dateObj.includes('+')
        ? dateObj + 'Z'
        : dateObj;
    const postDate = new Date(dateStr);
    const date = postDate.toLocaleDateString('ko-KR');
    const time = postDate.toLocaleTimeString('ko-KR', {
        hour: "numeric",
        minute: '2-digit'
    });

    return {date, time};
}