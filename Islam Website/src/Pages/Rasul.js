import React from "react";
import { Link } from "react-router-dom";

const FaithArticles = () => {
  return (
    <>
      <h1 className="section-title"> Prophets in Islam</h1>
      <div className="undeline"></div>

      <h4>
        <p className="section-info">
          In Islam there are two types of Prophets, Nabi and Rasul. The
          differences between Nabi and Rasul;
        </p>
      </h4>
      <p className="section-info">
        1. A Rasul was a messenger of Allah who was given a new Shariat (codes
        of law) from Him. And a Nabi was also the messenger of Allah, but he was
        not given any new Shariat and followed the shariat of earlier Rasul.
        “Every messenger is a Prophet [Nabi], but not every Prophet is a Rasul
        [Apostle]. All Rasuls were Nabi but all Nabis were not Rasuls.
        <br></br>
        <br></br>
        <br></br>
        2. A Prophet is always a Nabi by birth, but a Prophet become Rasul when
        he officially receives the post and declares it. For example, our
        Prophet Muhammad Sallallahu #alaihi wasallam was Nabi by birth, but
        became Rasul when he officially got and delivered the message of Risalat
        at the age of 40.
        <br></br>
        <br></br>
        <br></br>
        3. The Rasul [Apostle] receives the message from Allah in many different
        manners such as, vision during sleep, direct communication with angels
        when he is awake. i.e., he can see and speak to the angels during
        communication of Divine message. But the Nabi [Prophet] differs from the
        Rasul in that he does not see the angels when awake but sees during
        sleep.
        <br></br>
        <br></br>
        <br></br>
        4. The Rasul is higher in rank than a Nabi.
      </p>
      <h1 className="section-title">
        Lists of Prophets mentioned in the Qur'an
      </h1>
      <ul className="section-prophets">
        <li>Adam as (Adam)آدم</li>
        <li>Idris as (Enoch) إدر يس</li>
        <li>Noah as (Nuh) نوح </li>
        <li> Hud as (Hud) هود </li>
        <li>Shaleh as(Saleh) صالح </li>
        <li>Ibrahim as (Abraham) إبراهيم </li>
        <li>Lut as (Lot)لوط </li>
        <li>Ismail as (Ishmael) إسماعيل </li>
        <li>Ishaq as (Issac) إسحاق </li>
        <li>Yaqub as (Jacob) يعقوب </li>
        <li> Yusuf as (Joseph) يوسف </li>
        <li> Ayyub as (Job) أيوب </li>
        <li> Shu’aib as (Jethro) شعيب </li>
        <li> Musa as (Moses) موسى </li>
        <li> Harun as (Aaron)هارون </li>
        <li>Dzulkifli as (Ezekiel)ذو الكفل </li>
        <li> Dawud as (David) داود </li>
        <li> Sulaiman as (Soloman) سليمان </li>
        <li> Ilyas as (Elijah) إلياس </li>
        <li>Alyas’a as (Elisha) اليسع </li>
        <li> Yunus as (Jonah) يونس </li>
        <li> Zakaria as (Zachariah) زكريا </li>
        <li> Yahya as (John) يحيى </li>
        <li> Isa as (Jesus) عيسى </li>
        <li>Muhammad (S.A.W) محمد</li>
      </ul>
      <button className="button">
        <Link
          className="link-button"
          to="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          back to the top
        </Link>
      </button>
    </>
  );
};

export default FaithArticles;

/*
1. Adam as (Adam)آدم

2. Idris as (Enoch) إدر يس

3. Noah as (Nuh) نوح

4. Hud as (Hud) هود

5. Shaleh as (Saleh) صالح

6. Ibrahim as (Abraham) إبراهيم

7. Lut as (Lot) لوط

8. Ismail as (Ishmael) إسماعيل

9. Ishaq as (Issac) إسحاق

10. Yaqub as (Jacob) يعقوب

11. Yusuf as (Joseph) يوسف

12. Ayyub as (Job) أيوب

13. Shu’aib as (Jethro) شعيب

14. Musa as (Moses) موسى

15. Harun as (Aaron)هارون

16. Dzulkifli as (Ezekiel) ذو الكفل

17. Dawud as (David) داود

18. Sulaiman as (Soloman) سليمان

19. Ilyas as (Elijah) إلياس

20. Alyas’a as (Elisha) اليسع

21. Yunus as (Jonah) يونس

22. Zakaria as (Zachariah) زكريا

23. Yahya as (John) يحيى

24. Isa as (Jesus) عيسى

25. Muhammad saw محمد

*/
