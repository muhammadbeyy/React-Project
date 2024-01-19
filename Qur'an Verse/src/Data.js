const text = [
    `يَسْـَٔلُونَكَ عَنِ ٱلسَّاعَةِ أَيَّانَ مُرْسَىٰهَا ۖ قُلْ إِنَّمَا عِلْمُهَا عِندَ رَبِّى ۖ لَا يُجَلِّيهَا لِوَقْتِهَآ إِلَّا هُوَ ۚ ثَقُلَتْ فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۚ لَا تَأْتِيكُمْ إِلَّا بَغْتَةًۭ ۗ يَسْـَٔلُونَكَ كَأَنَّكَ حَفِىٌّ عَنْهَا ۖ قُلْ إِنَّمَا عِلْمُهَا عِندَ ٱللَّهِ وَلَـٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَعْلَمُونَ ١٨٧   
    They ask you ˹O Prophet˺ regarding the Hour, “When will it be?” Say, “That knowledge is only with my Lord. He alone will reveal it when the time comes. It is too tremendous for the heavens and the earth and will only take you by surprise.” They ask you as if you had full knowledge of it. Say, “That knowledge is only with Allah, but most people do not know.”.`,
  
    `يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِنَّمَا ٱلْخَمْرُ وَٱلْمَيْسِرُ وَٱلْأَنصَابُ وَٱلْأَزْلَـٰمُ رِجْسٌۭ مِّنْ عَمَلِ ٱلشَّيْطَـٰنِ فَٱجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ ٩٠.
    O believers! Intoxicants, gambling, idols, and drawing lots for decisions1 are all evil of Satan’s handiwork. So shun them so you may be successful.`,
    `
  50:30
  يَوْمَ نَقُولُ لِجَهَنَّمَ هَلِ ٱمْتَلَأْتِ وَتَقُولُ هَلْ مِن مَّزِيدٍۢ ٣٠
  
  ˹Beware of˺ the Day We will ask Hell, “Are you full ˹yet˺?” And it will respond, “Are there any more?”
  .`,

    `.
    5:58
    وَإِذَا نَادَيْتُمْ إِلَى ٱلصَّلَوٰةِ ٱتَّخَذُوهَا هُزُوًۭا وَلَعِبًۭا ۚ ذَٰلِكَ بِأَنَّهُمْ قَوْمٌۭ لَّا يَعْقِلُونَ ٥٨
    
    When you call to prayer, they mock it in amusement. This is because they are a people without understanding.
    `,
    
    `
    21:24
    أَمِ ٱتَّخَذُوا۟ مِن دُونِهِۦٓ ءَالِهَةًۭ ۖ قُلْ هَاتُوا۟ بُرْهَـٰنَكُمْ ۖ هَـٰذَا ذِكْرُ مَن مَّعِىَ وَذِكْرُ مَن قَبْلِى ۗ بَلْ أَكْثَرُهُمْ لَا يَعْلَمُونَ ٱلْحَقَّ ۖ فَهُم مُّعْرِضُونَ ٢٤
    
    Or have they taken other gods besides Him? Say, ˹O Prophet,˺ “Show ˹me˺ your proof. Here is ˹the Quran,˺ the Reminder for those with me; along with ˹earlier Scriptures,˺ the Reminder for those before me.” But most of them do not know the truth, so they turn away.`,
    `
    21:34
    وَمَا جَعَلْنَا لِبَشَرٍۢ مِّن قَبْلِكَ ٱلْخُلْدَ ۖ أَفَإِي۟ن مِّتَّ فَهُمُ ٱلْخَـٰلِدُونَ ٣٤
    
    We have not granted immortality to any human before you ˹O Prophet˺: so if you die, will they live forever?.`,
    `
    21:25
    وَمَآ أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِىٓ إِلَيْهِ أَنَّهُۥ لَآ إِلَـٰهَ إِلَّآ أَنَا۠ فَٱعْبُدُونِ ٢٥
    
    We never sent a messenger before you ˹O Prophet˺ without revealing to him: “There is no god ˹worthy of worship˺ except Me, so worship Me ˹alone˺.`,
    `
    21:33
    وَهُوَ ٱلَّذِى خَلَقَ ٱلَّيْلَ وَٱلنَّهَارَ وَٱلشَّمْسَ وَٱلْقَمَرَ ۖ كُلٌّۭ فِى فَلَكٍۢ يَسْبَحُونَ ٣٣
    
    And He is the One Who created the day and the night, the sun and the moon—each travelling in an orbit.`,
    `
    11:114
    وَأَقِمِ ٱلصَّلَوٰةَ طَرَفَىِ ٱلنَّهَارِ وَزُلَفًۭا مِّنَ ٱلَّيْلِ ۚ إِنَّ ٱلْحَسَنَـٰتِ يُذْهِبْنَ ٱلسَّيِّـَٔاتِ ۚ ذَٰلِكَ ذِكْرَىٰ لِلذَّٰكِرِينَ ١١٤
    
    Establish prayer ˹O Prophet˺ at both ends of the day and in the early part of the night. Surely good deeds wipe out evil deeds. That is a reminder for the mindful.`,
    `
    7:44
    وَنَادَىٰٓ أَصْحَـٰبُ ٱلْجَنَّةِ أَصْحَـٰبَ ٱلنَّارِ أَن قَدْ وَجَدْنَا مَا وَعَدَنَا رَبُّنَا حَقًّۭا فَهَلْ وَجَدتُّم مَّا وَعَدَ رَبُّكُمْ حَقًّۭا ۖ قَالُوا۟ نَعَمْ ۚ فَأَذَّنَ مُؤَذِّنٌۢ بَيْنَهُمْ أَن لَّعْنَةُ ٱللَّهِ عَلَى ٱلظَّـٰلِمِينَ ٤٤
    
    The residents of Paradise will call out to the residents of the Fire, “We have certainly found our Lord’s promise to be true. Have you too found your Lord’s promise to be true?” They will reply, “Yes, we have!” Then a caller will announce to both, “May Allah’s condemnation be upon the wrongdoers,
    .`,
    `
    7:35
    يَـٰبَنِىٓ ءَادَمَ إِمَّا يَأْتِيَنَّكُمْ رُسُلٌۭ مِّنكُمْ يَقُصُّونَ عَلَيْكُمْ ءَايَـٰتِى ۙ فَمَنِ ٱتَّقَىٰ وَأَصْلَحَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ ٣٥
    
    O children of Adam! When messengers from among yourselves come to you reciting My revelations—whoever shuns evil and mends their ways, there will be no fear for them, nor will they grieve.
    .`,
    `
    67:3
    ٱلَّذِى خَلَقَ سَبْعَ سَمَـٰوَٰتٍۢ طِبَاقًۭا ۖ مَّا تَرَىٰ فِى خَلْقِ ٱلرَّحْمَـٰنِ مِن تَفَـٰوُتٍۢ ۖ فَٱرْجِعِ ٱلْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍۢ ٣
    
    ˹He is the One˺ Who created seven heavens, one above the other. You will never see any imperfection in the creation of the Most Compassionate. So look again: do you see any flaws?
    .`,
  ];
  export default text;