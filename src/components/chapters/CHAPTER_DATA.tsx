import CHAPTER_DATA from '../../chapters-amount.json';

function CHAPTERS(){
    const RTM_LAST = CHAPTER_DATA.novels.RTM.chapters;
    const RTM_TOTAL = CHAPTER_DATA.novels.RTM['total-chapters'];
    const RTM_RELEASE = CHAPTER_DATA.novels.RTM.release;
    
    const KDG_LAST = CHAPTER_DATA.novels.KDG.chapters;
    const KDG_TOTAL = CHAPTER_DATA.novels.KDG['total-chapters'];
    const KDG_RELEASE = CHAPTER_DATA.novels.KDG.release;
    
    const Monarch_LAST = CHAPTER_DATA.novels.Monarch.chapters;
    const Monarch_TOTAL = CHAPTER_DATA.novels.Monarch['total-chapters'];
    const Monarch_RELEASE = CHAPTER_DATA.novels.Monarch.release;


    return { 
            RTM_LAST,
            RTM_TOTAL,
            RTM_RELEASE,
            KDG_LAST,
            KDG_TOTAL,
            KDG_RELEASE,
            Monarch_LAST,
            Monarch_TOTAL,
            Monarch_RELEASE
        };
}

export default CHAPTERS;