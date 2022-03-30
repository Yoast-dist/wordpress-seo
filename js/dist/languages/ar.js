window.yoast=window.yoast||{},window.yoast.Researcher=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=35)}({0:function(e,t){e.exports=window.yoast.analysis},1:function(e,t){e.exports=window.lodash},35:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ce}));var n=r(0),o=["قليل","بعض","واحد","واحد","إثنان","ثلاثة","أربعة","خمسة","ستة","سبعة","ثمانية","تسعة","عشرة","هذا","هذه","ذلك","تلك","هذين","هذان","هتين","هتان","هؤلا","أولائك","هؤلاء"];const s=["الـ"],i=["صفر","واحد","واحدة","أحد","إحدى","إثنان","اثنتان","إثنين","ثنتين","إثنتين","إثنا","إثنى","إثنتا","إثنتي","ثلاث","ثلاثة","أربع","أربعة","خمس","خمسة","ست","ستة","سبع","سبعة","ثمان","ثمانية","تسع","تسعة","عشر","عشرة","عشرون","ثلاثون","أربعين","أربعون","خمسون","ستون","سبعون","ثمانون","تسعون","مئة","مائة","مئتان","ثلاثمئة","ثلاثمائة","أربعمئة","أربعمائة","خمسمئة","خمسمائة","ستمئة","ستمائة","سبعمئة","سبعمائة","ثمانمئة","ثمانمائة","تسعمئة","تسعمائة","ألف","ألآف","ألفا","ألفين","مليون","ملايين","مليار"],c=["الأول","الأولى","الثاني","الثانية","الثالث","الثالثة","الرابع","الرابعة","الخامس","الخامسة","السادس","السادسة","السابع","السابعة","الثامن","الثامنة","التاسع","التاسعة","العاشر","العاشرة","الحادي","الحادية","العشرون","الثلاثون","الأربعون","الخمسون","الستون","السبعون","الثمانون","التسعون","المئة","المائة"],a=["أنا","انت","هو","هي","نحن","أنتما","هما","أنتم","أنتن","هم","هن","وأنا","وأنت","وهو","وانا","ونحن","وهي","وانت","أنتي","فهو","وهم","وأنتما"],u=["إياه","إياهما","إياهم","إياها","إياكما","إياهن","إياك","إياكم","إياكن","إياي","إيانا"],l=["هذا","هذه","هذان","هذين","هتان","هـتين","ذا","ذان","ذين","أولئ","ذلك","ذانك","ذينك","تلك","تانك","تينك","أولئك","هؤلاء","ذاك","هاتان","هاتين","ذه","هأولئ","ذلكم","ذلكم","وهذا","هذة","أولئك"],f=["يا","أي","هيا","أ","آ","أيها","أيتها"],d=["جميع","كل","بعض","كثير","كثيرة","عديد","عديدة","لبعض","قليلا","كافية","كافي","صغير","صغيرة","قليل","قليلة","كثيرا","بالكثير","أكثر","اكبر","اغلب","عديدة","عديد","قليلون","أقل","كل","الكثير","المزيد","اكثر","الأقل","يكفي","العديد","كله","جميعا","كلها","وكل","كلنا","كثيرة","الأكثر","ببعض","بضعة","عدة"],m=["نفسي","نفسك","نفسه","نفسها","أنفسنا","أنسفكم","أنفسهم","أنفسهما","أنفسكما","أنفسكن","أنفسهن","بنفسي"],h=["ليس","جميع","الكل","الجميع","شخص","شيء","شيئا","أخرى","آخرين","أي","أيا","من","الآخرين","أحد","شئ","أخرى","شىء","احد","أية","اخرى","البعض","أخر","الآخر","أحدهم","الأخرى","الشئ","بعضنا","بشيء","شي","الغير"],g=["الذي","التي","الذى","التى","الذين","مالذي","اللذان","الذين","اللتان","اللاتي","الذي","اللتين","اللذين"],w=["جدا","حقا","للغاية","تماما","فعلا"],p=["ماذا","لمن","ما","أي","أى","وماذا","وما","بماذا","ماهو","ماهذا"],x=["من","ومن"],v=["اين","كيف","لماذا","لم","سواء","أينما","كيفما","مـتى","كم","هل","أين","أهذا","وكيف","وهل"],S=["هنا","هناك","هنالك"],R=["دائما","مرة","مرتين"],W=["يجب","سوف","قد","أستطيع","يستطيع","نستطيع","تستطيع","استطيع","تستطيعين","استطعت","استطاعت","استطاع","استطعتما","استطاعتا","استطاعا","استطعنا","استطعتن","استطعتم","استطعن","استطاعوا","تستطيعان","يستطيعان","تستطعن","تستطيعون","يستطعن","يستطيعون","تستطيعي","تستطيعا","يستطيعا","تستطيعوا","يستطيعوا","استطيعت","استطيعتا","استطيعا","استطيعوا","تستطاعين","تستطاع","يستطاع","نستطاع","تستطاعان","يستطاعان","تستطاعون","يستطاعون","أستطاع","تستطاعي","تستطاعا","يستطاعا","يستطاعوا","تستطاعوا","استطيعي","يمكنني","يمكن","يمكننى","بإمكانك","لابد","ينبغي","وسوف","هلا","بد","وقد","ولقد","يمكنه","يمكنهما","يمكنهم","يمكنها","يمكنكما","يمكنهن","يمكنك","يمكنكم","يمكنكن","يمكني","يمكننا"],b=["لدي","لديك","لدينا","لديه","لديها","لديهم","لديهما","لديكم","لديكما","لديهن","لديكن","صبحت","صبح","صبحتما","صبحا","صبحتا","صبحنا","صبحتن","صبحتم","صبحن","صبحوا","أصبح","تصبحين","تصبح","يصبح","تصبحان","يصبحان","نصبح","تصبحن","تصبحون","تصبحي","تصبحا","يصبحا","تصبحوا","يصبحوا","اصبحي","اصبحوا","اصبحا","ابقى","كان","كنت","كانت","يكون","كنتما","كانتا","كانا","كنا","كن","كانوا","كنتم","أكون","تكونين","تكون","تكونان","يكونان","نكون","تكونون","يكن","يكونون","تكوني","تكونا","يكونا","تكونوا","يكونوا","كونا","كونوا","كن","أكن","اكون","وكان","كوني","اكن","سنكون","كنا","سيكون","يكن","ستكون","تكن","سأكون","بت","باتت","بات","بتما","باتتا","باتا","بتنا","بتن","بتم","باتوا","أبيت","بت","صرت","صرت","صار","صرتما","صارتا","صارا","صرنا","صرتن","صرتم","صرن","صاروا","أصير","تصيرين","تصير","يصير","تصيران","يصيران","نصير","تصرن","يصرن","تصيرون","يصيرون","تصيري","تصيرا","يصيرا","تصيروا","يصيروا","ليس","وليس","ليست","ليسوا","ليسا","ليسنا","ليسن","أليس","اليس","لست","لسنا"],y=["أن","في","على","إلى","ان","عن","فى","مع","الى","بعد","بدون","تحت","طوال","علي","غير","لدى","حول","خلال","لكي","بين","الي","خارج","بشأن","فوق","دون","لـ","بـ","بلا","بواسطة","ضد","أمام","وفي","وشك","نحو","ذو","أسفل","ب","خلف","بجانب","عدا","طبقا","بعد","عكس","منذ"],F=["إليه","إليهما","إليهم","إليها","إليكما","إليهن","إليك","إليكم","إليكن","إلي","إلينا","عليه","عليهما","عليهم","عليها","عليكما","عليهن","عليك","عليكم","عليكن","علي","علينا","عنه","عنهما","عنهم","عنها","عنكما","عنهن","عنك","عنكم","عنكن","عني","عننا","له","لهما","لهم","لها","لكما","لهن","لك","لكم","لكن","لي","لنا","معه","معهما","معهم","معها","معكما","معهن","معك","معكم","معكن","معي","معنا","منه","منهما","منهم","منها","منكم","منهن","منك","منكم","منكن","مني","منا","فيه","فيهما","فيهم","فيها","فيكما","فيهن","فيك","فيكم","به","بهما","بهم","بها","بكما","بهن","بك","بكم","بكن","بي","بنا","بينهم","بينهما","بينكما","بينكم","بتلك","بذلك","فأنت","بيننا","بهذا","بهذه","فأنا","فهذا","فيما","أجلك","كهذا","لأي","لذلك","لما","لنفسك","لهذا","لهذه"],L=["داخل","ضمن","قدما"],_=["و","و/او","او","أو"],O=["إذا","لو","اذا","وإذا","أذا"],j=["أقول","تقول","تقولين","تقولان","يقول","تقول","يقولان","تقولان","نقول","تقولون","تقلن","يقولون","قلت","قلتما","قال","قالت","قالا","قالتا","قلنا","قلتما","قلتن","قالوا","قلنا","تدعي","يدعي","تدعيان","تدعون","يدعون","يدعين","ادعيت","ادعيت","ادعيتما","ادعى","ادعت","ادعينا","ادعيتما","ادعيتن","ادعوا","ادعينا","تسأل","تسألين","يسأل","تسأل","نسأل","تسألون","تسألن","يسألون","يسألن","سألت","سألنا","سألتم","سألتن","سألوا","سألنا","تشرح","تشرحين","يشرح","تشرح","نشرح","تشرحون","تشرحن","يشرحون","يشرحن","شرحت","شرح","شرحت","شرحنا","شرحتم","شرحتن","شرحوا","شرحنا","شرحن","أعتقد","تعتقد","تعتقدين","يعتقد","تعتقد","تعتقدون","تعتقدن","يعتقدون","يعتقدن","اعتقدت","اعتق","اعتقدت","أتحدث","تتحدث","تتحدثين","يتحدث","تتحدث","نتحدث","تحدثت","تحدث","تحدثت","تحدثوا","تحدثن","أعلن","تعلن","تعلنين","يعلن","تعلن","نعلن","يعلنون","يعلن","أعلنت","أعلن","أعلنت","أعلنا","أعلنوا","أعلن","أناقش","تناقش","تناقشين","يناقش","تناقش","نناقش","تناقشون","تناقشن","يناقشون","يناقشن","ناقشت","ناقشت","ناقشت","ناقشت","ناقشت","ناقشنا","ناقشتم","ناقشتن","ناقشوا","ناقشن","أفهم","تفهم","تفهمين","يفهم","تفهم","نفهم","يفهمون","يفهمن","فهمت","فهم","فهمت","فهمنا","فهموا","فهمن"],M=["يعني","أحتاج","يعمل","تعني","تقوم","أود","عندك","البقاء","حاولت","توجد","دعونا","تفكر","جئت","يريدون","أتيت","فعلته","تقصد","زال","إرادة‎","مريد‎","مراد‎","أردت‎","أردت‎","أردت‎","أرادت‎","أريد‎","تريد‎","تريدين‎","يريد‎","تريد‎","أريد‎","تريد‎","يريد‎","تريد‎","أرد‎","ترد‎","يرد‎","ترد‎","أرد‎","أريدي‎","أردتما","تريدان‎","تريدا‎","تريدا‎","أريدا‎","أرادا‎","أرادتا‎","يريدان‎","تريدان‎","يريدا‎","تريدا‎","أردنا‎","نريد‎","نريد‎","نرد‎","أردتم‎","أردتن‎","تريدون‎","تردن‎","تريدوا‎","تردن‎","تريدوا‎","تردن‎","أريدوا‎","أردن‎","أرادوا‎","أردن‎","يريدون‎","يردن‎","يريدوا‎","أردت‎","أراد","أراد","أرد‎","أردت‎","أريد‎","أردتما‎","أريدا‎","أردنا‎","أردتم‎","أريدوا‎","أردت‎","أريدت‎","أريدتا‎","أردتن‎","أردن‎","تراد‎","يراد‎","ترادان‎","يرادان‎","نراد‎","ترادون‎","يرادون‎","ترادين‎","تراد‎","ترادان‎","تردن‎","يردن‎","تراد‎","يراد‎","ترادا‎","يرادا‎","نراد‎","ترادوا‎","يرادوا‎","ترادي‎","تراد‎","ترادا‎","تردن‎","يردن‎","ترد‎","يرد‎","ترادا‎","يرادا‎","نرد‎","ترادوا‎","يرادوا‎","ترادي‎","ترد‎","ترادا‎","تردن‎","يردن‎","أرد‎","اعتقاد‎","معتقد‎","معتقد‎","اعتقدت‎","اعتقدت‎","اعتقد","اعتقدتما‎","اعتقدا‎","اعتقدنا‎","اعتقدتم‎","اعتقدوا‎","اعتقدت‎","اعتقدت‎","اعتقدتا‎","اعتقدتن‎","اعتقدن‎","تعتقد‎","يعتقد‎","تعتقدان‎","يعتقدان‎","نعتقد‎","تعتقدون‎","يعتقدون‎","تعتقدين‎","تعتقد‎","تعتقدان‎","تعتقدن‎","يعتقدن‎","تعتقد‎","يعتقد‎","تعتقدا‎","يعتقدا‎","نعتقد‎","تعتقدوا‎","يعتقدوا‎","تعتقدي‎","تعتقد‎","تعتقدا‎","تعتقدن‎","يعتقدن‎","تعتقد‎","يعتقد‎","تعتقدا‎","يعتقدا‎","نعتقد‎","تعتقدوا‎","يعتقدوا‎","تعتقدي‎","تعتقد‎","تعتقدا‎","تعتقدن‎","يعتقدن‎","اعتقدي‎","اعتقدن‎","اعتقد","اعتقدا‎","اعتقدوا‎","اعتقدت‎","اعتقدت‎","اعتقد","اعتقدتما‎","اعتقدا‎","اعتقدنا‎","اعتقدتم‎","اعتقدوا‎","اعتقدت‎","اعتقدت‎","اعتقدتا‎","اعتقدتن‎","اعتقدن‎","أعتقد‎","تعتقد‎","يعتقد‎","تعتقدان‎","يعتقدان‎","نعتقد‎","تعتقدون‎","يعتقدون‎","تعتقدين‎","تعتقد‎","تعتقدان‎","تعتقدن‎","يعتقدن‎","أعتقد‎","تعتقد‎","يعتقد‎","تعتقدا‎","يعتقدا‎","نعتقد‎","تعتقدوا‎","يعتقدوا‎","تعتقدي‎","تعتقد‎","تعتقدا‎","تعتقدن‎","يعتقدن‎","أعتقد‎","تعتقد‎","يعتقد‎","تعتقدا‎","يعتقدا‎","نعتقد‎","تعتقدوا‎","يعتقدوا‎","تعتقدي‎","تعتقد‎","تعتقدا‎","تعتقدن‎","يعتقدن‎","اعتقد","اعتقدا‎","اعتقدوا‎","إيجاد‎","موجد‎","موجد‎","أوجدت‎","أوجدت‎","أوجد","أوجدتما‎","أوجدا‎","أوجدنا‎","أوجدتم‎","أوجدوا‎","أوجدت‎","أوجدت‎","أوجدتا‎","أوجدتن‎","أوجدن‎","أوجد","توجد‎","يوجد‎","توجدان‎","يوجدان‎","نوجد‎","توجدون‎","يوجدون‎","توجدين‎","توجد‎","توجدان‎","توجدن‎","يوجدن‎","أوجد","توجد‎","يوجد‎","توجدا‎","يوجدا‎","نوجد‎","توجدوا‎","يوجدوا‎","توجدي‎","توجد‎","توجدا‎","توجدن‎","يوجدن‎","أوجد","توجد‎","يوجد‎","توجدا‎","يوجدا‎","نوجد‎","توجدوا‎","يوجدوا‎","توجدي‎","توجد‎","توجدا‎","توجدن‎","يوجدن‎","أوجد","أوجدا‎","أوجدوا‎","أوجدي‎","أوجدن‎","أوجدت‎","أوجدت‎","أوجد","أوجدتما‎","أوجدا‎","أوجدنا‎","أوجدتم‎","أوجدوا‎","أوجدت‎","أوجدت‎","أوجدتا‎","أوجدتن‎","أوجدن‎","أوجد","توجد‎","يوجد‎","توجدان‎","يوجدان‎","نوجد‎","توجدون‎","يوجدون‎","توجدين‎","توجد‎","توجدان‎","توجدن‎","يوجدن‎","أوجد","توجد‎","يوجد‎","توجدا‎","يوجدا‎","نوجد‎","توجدوا‎","يوجدوا‎","توجدي‎","توجد‎","توجدا‎","توجدن‎","يوجدن‎","أوجد","توجد‎","يوجد‎","توجدا‎","يوجدا‎","نوجد‎","توجدوا‎","يوجدوا‎","توجدي‎","توجد‎","توجدا‎","توجدن‎","يوجدن‎","اعتقد","اريد","أذهب","إذهاب‎","مذهب‎","مذهب‎","أذهبت‎","أذهبت‎","أذهب","أذهبتما‎","أذهبا‎","أذهبنا‎","أذهبتم‎","أذهبوا‎","أذهبت‎","أذهبت‎","أذهبتا‎","أذهبتن‎","أذهبن‎","أذهب","تذهب‎","يذهب‎","تذهبان‎","يذهبان‎","نذهب‎","تذهبون‎","يذهبون‎","تذهبين‎","تذهب‎","تذهبان‎","تذهبن‎","يذهبن‎","أذهب","تذهب‎","يذهب‎","تذهبا‎","يذهبا‎","نذهب‎","تذهبوا‎","يذهبوا‎","تذهبي‎","تذهب‎","تذهبا‎","تذهبن‎","يذهبن‎","أذهب","تذهب‎","يذهب‎","تذهبا‎","يذهبا‎","نذهب‎","تذهبوا‎","يذهبوا‎","تذهبي‎","تذهب‎","تذهبا‎","تذهبن‎","يذهبن‎","أذهب","أذهبا‎","أذهبوا‎","أذهبي‎","أذهبن‎","أذهبت‎","أذهبت‎","أذهب","أذهبتما‎","أذهبا‎","أذهبنا‎","أذهبتم‎","أذهبوا‎","أذهبت‎","أذهبت‎","أذهبتا‎","أذهبتن‎","أذهبن‎","أذهب","تذهب‎","يذهب‎","تذهبان‎","يذهبان‎","نذهب‎","تذهبون‎","يذهبون‎","تذهبين‎","تذهب‎","تذهبان‎","تذهبن‎","يذهبن‎","أذهب","تذهب‎","يذهب‎","تذهبا‎","يذهبا‎","نذهب‎","تذهبوا‎","يذهبوا‎","تذهبي‎","تذهب‎","تذهبا‎","تذهبن‎","يذهبن‎","أذهب","تذهب‎","يذهب‎","تذهبا‎","يذهبا‎","نذهب‎","تذهبوا‎","يذهبوا‎","تذهبي‎","تذهب‎","تذهبا‎","تذهبن‎","يذهبن‎","نذهب","مذهب‎","ذاهب‎","مذهوب‎","ذهبت‎","ذهبت‎","ذهب","ذهبتما‎","ذهبا‎","ذهبنا‎","ذهبتم‎","ذهبوا‎","ذهبت‎","ذهبت‎","ذهبتا‎","ذهبتن‎","ذهبن‎","أذهب‎","تذهب‎","يذهب‎","تذهبان‎","يذهبان‎","نذهب‎","تذهبون‎","يذهبون‎","تذهبين‎","تذهب‎","تذهبان‎","تذهبن‎","يذهبن‎","أذهب‎","تذهب‎","يذهب‎","تذهبا‎","يذهبا‎","نذهب‎","تذهبوا‎","يذهبوا‎","تذهبي‎","تذهب‎","تذهبا‎","تذهبن‎","يذهبن‎","أذهب‎","تذهب‎","يذهب‎","تذهبا‎","يذهبا‎","نذهب‎","تذهبوا‎","يذهبوا‎","تذهبي‎","تذهب‎","تذهبا‎","تذهبن‎","يذهبن‎","اذهب‎","اذهبا‎","اذهبوا‎","اذهبي‎","اذهبن‎","ذهب","يذهب‎","يذهب‎","يذهب‎","أظن","ظن","ظان‎","مظنون‎","ظننت‎","ظننت‎","ظن","ظننتما‎","ظنا‎","ظننا‎","ظننتم‎","ظنوا‎","ظننت‎","ظنت‎","ظنتا‎","ظننتن‎","ظنن‎","أظن‎","تظن‎","يظن‎","تظنان‎","يظنان‎","نظن‎","تظنون‎","يظنون‎","تظنين‎","تظن‎","تظنان‎","تظنن‎","يظنن‎","أظن‎","تظن‎","يظن‎","تظنا‎","يظنا‎","نظن‎","تظنوا‎","يظنوا‎","تظني‎","تظن‎","تظنا‎","تظنن‎","يظنن‎","أظنن‎","تظنا‎","يظنا‎","تظنوا‎","يظنوا‎","تظنن‎","تظني‎","تظنا‎","تظنن‎","يظنن‎","أظن","أظن","تظن‎","تظن‎","يظنن‎","يظن‎","ظني‎","اظنن‎","يظن‎","نظنن‎","نظن‎","نظن‎","تظنن‎","تظن‎","تظن‎","ظنا‎","اظنن‎","ظن","ظن","ظنوا‎","اذهب‎","اذهبا‎","اذهبوا‎","ظننت‎","ظننت‎","ظن","ظننتما‎","ظنا‎","ظننا‎","ظننتم‎","ظنوا‎","ظننت‎","ظنت‎","ظنتا‎","ظننتن‎","ظنن‎","أظن‎","تظن‎","يظن‎","تظنان‎","يظنان‎","نظن‎","تظنون‎","يظنون‎","تظنين‎","تظن‎","تظنان‎","تظنن‎","يظنن‎","أظن‎","تظن‎","يظن‎","تظنا‎","يظنا‎","نظن‎","تظنوا‎","يظنوا‎","تظني‎","تظن‎","تظنا‎","تظنن‎","يظنن‎","أظنن‎","تظنا‎","يظنا‎","تظنوا‎","يظنوا‎","أظن‎","تظني‎","تظنا‎","تظنن‎","يظنن‎","تظنن‎","تظن‎","تظن‎","يظنن‎","يظن‎","يظن‎","نظنن‎","نظن‎","نظن‎","تظنن‎","تظن‎","تظن‎","ذهبت","تظن","توجدت‎","توجدت‎","توجد","توجدتما‎","توجدا‎","توجدنا‎","توجدتم‎","توجدوا‎","توجدت‎","توجدت‎","توجدتا‎","توجدتن‎","توجدن‎","أتوجد‎","ʾتتوجد‎","يتوجد‎","تتوجدان‎","يتوجدان‎","نتوجد‎","تتوجدون‎","يتوجدون‎","تتوجدين‎","تتوجد‎","تتوجدان‎","تتوجدن‎","يتوجدن‎","أتوجد‎","ʾتتوجد‎","يتوجد‎","تتوجدا‎","يتوجدا‎","نتوجد‎","تتوجدوا‎","يتوجدوا‎","تتوجدي‎","تتوجد‎","تتوجدا‎","تتوجدن‎","يتوجدن‎","أتوجد‎","ʾتتوجد‎","يتوجد‎","تتوجدا‎","يتوجدا‎","نتوجد‎","تتوجدوا‎","يتوجدوا‎","تتوجدي‎","تتوجد‎","تتوجدا‎","تتوجدن‎","يتوجدن‎","توجد","توجدا‎","توجدوا‎","توجدي‎","توجدن‎","توجد","يتوجد‎","يتوجد‎","يتوجد‎","توجد","متوجد‎","متوجد‎","دعاء‎","داع‎","مدعو‎","دعوت‎","دعوت‎","دعا","دعوتما‎","دعوا‎","دعونا‎","دعوتم‎","دعوا‎","دعوت‎","دعت‎","دعتا‎","دعوتن‎","دعون‎","أدعو‎","تدعو‎","يدعو‎","تدعوان‎","يدعوان‎","ندعو‎","تدعون‎","يدعون‎","تدعين‎","تدعو‎","تدعوان‎","تدعون‎","يدعون‎","أدعو‎","تدعو‎","يدعو‎","تدعوا‎","يدعوا‎","ندعو‎","تدعوا‎","يدعوا‎","تدعي‎","تدعو‎","تدعوا‎","تدعون‎","يدعون‎","أدع‎","تدع‎","يدع‎","تدعوا‎","يدعوا‎","ندع‎","تدعوا‎","يدعوا‎","تدعي‎","تدع‎","تدعوا‎","تدعون‎","يدعون‎","ادع‎","ادعوا‎","ادعوا‎","ادعي‎","ادعون‎","دعيت‎","دعيت‎","دعي‎","دعيتما‎","دعيا‎","دعينا‎","دعيتم‎","دعوا‎","دعيت‎","دعيت‎","دعيتا‎","دعيتن‎","دعين‎","أدعى‎","تدعى‎","يدعى‎","تدعيان‎","يدعيان‎","ندعى‎","تدعون‎","يدعون‎","تدعين‎","تدعى‎","تدعيان‎","تدعين‎","يدعين‎","أدعى‎","تدعى‎","يدعى‎","تدعيا‎","يدعيا‎","ندعى‎","تدعوا‎","يدعوا‎","تدعي‎","تدعى‎","تدعيا‎","تدعين‎","يدعين‎","أدع‎","تدع‎","يدع‎","تدعيا‎","يدعيا‎","ندع‎","تدعوا‎","يدعوا‎","تدعي‎","تدع‎","تدعيا‎","تدعين‎","يدعين‎","تفكر","متفكر‎","متفكر‎","تفكرت‎","تفكرت‎","تفكر","تفكرتما‎","تفكرا‎","تفكرنا‎","تفكرتم‎","تفكروا‎","تفكرت‎","تفكرت‎","تفكرتا‎","تفكرتن‎","تفكرن‎","أتفكر‎","تتفكر‎","يتفكر‎","تتفكران‎","يتفكران‎","نتفكر‎","تتفكرون‎","يتفكرون‎","تتفكرين‎","تتفكر‎","تتفكران‎","تتفكرن‎","يتفكرن‎","أتفكر‎","تتفكر‎","يتفكر‎","تتفكرا‎","يتفكرا‎","نتفكر‎","تتفكروا‎","يتفكروا‎","تتفكري‎","تتفكر‎","تتفكرا‎","تتفكرن‎","يتفكرن‎","أتفكر‎","تتفكر‎","يتفكر‎","تتفكرا‎","يتفكرا‎","نتفكر‎","تتفكروا‎","يتفكروا‎","تتفكري‎","تتفكر‎","تتفكرا‎","تتفكرن‎","يتفكرن‎","تفكر","تفكرا‎","تفكروا‎","تفكري‎","تفكرن‎","تفكر","يتفكر‎","يتفكر‎","يتفكر‎","مجيء‎","جيء‎","جيئة‎","جيئة‎","جاء","مجيء‎","جئت‎","جئت‎","جاء","جئتما‎","جاءا‎","جئنا‎","جئتم‎","جائوا‎","جاؤوا‎","جئت‎","جاءت‎","جاءتا‎","جئتن‎","جئن‎","أجيء‎","تجيء‎","يجيء‎","تجيئان‎","يجيئان‎","نجيء‎","تجيئون‎","تجيؤون‎","يجيئون‎","يجيؤون‎","تجيئين‎","تجيء‎","تجيئان‎","تجئن‎","يجئن‎","أجيء‎","تجيء‎","يجيء‎","تجيئا‎","يجيئا‎","نجيء‎","تجيئوا‎","تجيؤوا‎","يجيئوا‎","يجيؤوا‎","تجيئي‎","تجيء‎","تجيئا‎","تجئن‎","يجئن‎","أجئ‎","تجئ‎","يجئ‎","تجيئا‎","يجيئا‎","نجئ‎","تجيئوا‎","تجيؤوا‎","يجيئوا‎","يجيؤوا‎","تجيئي‎","تجئ‎","تجيئا‎","تجئن‎","يجئن‎","جئ‎","جيئا‎","جيئوا‎","جيؤوا‎","جيئي‎","جئن‎","جئت‎","جئت‎","جيء‎","جئتما‎","جيئا‎","جئنا‎","جئتم‎","جيئوا‎","جيؤوا‎","جئت‎","جيئت‎","جيئتا‎","جئتن‎","جئن‎","أجاء‎","تجاء‎","يجاء‎","تجاءان‎","يجاءان‎","نجاء‎","تجائون‎","تجاؤون‎","يجائون‎","يجاؤون‎","تجائين‎","تجاء‎","تجاءان‎","تجأن‎","يجأن‎","أجاء‎","تجاء‎","يجاء‎","تجاءا‎","يجاءا‎","نجاء‎","تجائوا‎","تجاؤوا‎","يجائوا‎","يجاؤوا‎","تجائي‎","تجاء‎","تجاءا‎","تجأن‎","يجأن‎","أجأ‎","تجأ‎","يجأ‎","تجاءا‎","يجاءا‎","نجأ‎","تجائوا‎","تجاؤوا‎","يجائوا‎","يجاؤوا‎","تجائي‎","تجأ‎","تجاءا‎","تجأن‎","يجأن‎","إرادة‎","مريد‎","مراد‎","أردت‎","أردت‎","أراد","أردتما‎","أرادا‎","أردنا‎","أردتم‎","أرادوا‎","أردت‎","أرادت‎","أرادتا‎","أردتن‎","أردن‎","أريد‎","تريد‎","يريد‎","تريدان‎","يريدان‎","نريد‎","تريدون‎","يريدون‎","تريدين‎","تريد‎","تريدان‎","تردن‎","يردن‎","أريد‎","تريد‎","يريد‎","تريدا‎","يريدا‎","نريد‎","تريدوا‎","يريدوا‎","تريدي‎","تريد‎","تريدا‎","تردن‎","يردن‎","أرد‎","ترد‎","يرد‎","تريدا‎","يريدا‎","نرد‎","تريدوا‎","يريدوا‎","تريدي‎","ترد‎","تريدا‎","تردن‎","يردن‎","أرد‎","أريدا‎","أريدوا‎","أريدي‎","أردن‎","أردت‎","أردت‎","أريد‎","أردتما‎","أريدا‎","أردنا‎","أردتم‎","أريدوا‎","أردت‎","أريدت‎","أريدتا‎","أردتن‎","أردن‎","أراد","تراد‎","يراد‎","ترادان‎","يرادان‎","نراد‎","ترادون‎","يرادون‎","ترادين‎","تراد‎","ترادان‎","تردن‎","يردن‎","أراد","تراد‎","يراد‎","ترادا‎","يرادا‎","نراد‎","ترادوا‎","يرادوا‎","ترادي‎","تراد‎","ترادا‎","تردن‎","يردن‎","أرد‎","ترد‎","يرد‎","ترادا‎","يرادا‎","نرد‎","ترادوا‎","يرادوا‎","ترادي‎","ترد‎","ترادا‎","تردن‎","يردن‎","إتيان‎","أتي‎","مأتاة‎","مأتى‎","آت‎","مأتي‎","أتيت‎","أتيت‎","أتى","أتيتما‎","أتيا‎","أتينا‎","أتيتم‎","أتوا‎","أتيت‎","أتت‎","أتتا‎","أتيتن‎","أتين‎","آتي‎","تأتي‎","يأتي‎","تأتيان‎","يأتيان‎","نأتي‎","تأتون‎","يأتون‎","تأتين‎","تأتي‎","تأتيان‎","تأتين‎","يأتين‎","آتي‎","تأتي‎","يأتي‎","تأتيا‎","يأتيا‎","نأتي‎","تأتوا‎","يأتوا‎","تأتي‎","تأتي‎","تأتيا‎","تأتين‎","يأتين‎","آت‎","تأت‎","يأت‎","تأتيا‎","يأتيا‎","نأت‎","تأتوا‎","يأتوا‎","تأتي‎","تأت‎","تأتيا‎","تأتين‎","يأتين‎","ايت‎","ايتيا‎","ايتوا‎","ايتي‎","ايتين‎","أتيت‎","أتيت‎","أتي‎","أتيتما‎","أتيا‎","أتينا‎","أتيتم‎","أتوا‎","أتيت‎","أتيت‎","أتيتا‎","أتيتن‎","أتين‎","أوتى‎","تؤتى‎","يؤتى‎","تؤتيان‎","يؤتيان‎","نؤتى‎","تؤتون‎","يؤتون‎","تؤتين‎","تؤتى‎","تؤتيان‎","تؤتين‎","يؤتين‎","أوتى‎","تؤتى‎","يؤتى‎","تؤتيا‎","يؤتيا‎","نؤتى‎","تؤتوا‎","يؤتوا‎","تؤتي‎","تؤتى‎","تؤتيا‎","تؤتين‎","يؤتين‎","أوت‎","تؤت‎","يؤت‎","تؤتيا‎","يؤتيا‎","نؤت‎","تؤتوا‎","يؤتوا‎","تؤتي‎","تؤت‎","تؤتيا‎","تؤتين‎","يؤتين‎","فعلته","فعل","فعل","فاعل‎","مفعول‎","فعلت‎","فعلت‎","فعل","فعلتما‎","فعلا‎","فعلنا‎","فعلتم‎","فعلوا‎","فعلت‎","فعلت‎","فعلتا‎","فعلتن‎","فعلن‎","أفعل‎","تفعل‎","يفعل‎","تفعلان‎","يفعلان‎","نفعل‎","تفعلون‎","يفعلون‎","تفعلين‎","تفعل‎","تفعلان‎","تفعلن‎","يفعلن‎","أفعل‎","تفعل‎","يفعل‎","تفعلا‎","يفعلا‎","نفعل‎","تفعلوا‎","يفعلوا‎","تفعلي‎","تفعل‎","تفعلا‎","تفعلن‎","يفعلن‎","أفعل‎","تفعل‎","يفعل‎","تفعلا‎","يفعلا‎","نفعل‎","تفعلوا‎","يفعلوا‎","تفعلي‎","تفعل‎","تفعلا‎","تفعلن‎","يفعلن‎","افعل‎","افعلا‎","افعلوا‎","افعلي‎","افعلن‎","فعلت‎","فعلت‎","فعل","فعلتما‎","فعلا‎","فعلنا‎","فعلتم‎","فعلوا‎","فعلت‎","فعلت‎","فعلتا‎","فعلتن‎","فعلن‎","أفعل‎","تفعل‎","يفعل‎","تفعلان‎","يفعلان‎","نفعل‎","تفعلون‎","يفعلون‎","تفعلين‎","تفعل‎","تفعلان‎","تفعلن‎","يفعلن‎","أفعل‎","تفعل‎","يفعل‎","تفعلا‎","يفعلا‎","نفعل‎","تفعلوا‎","يفعلوا‎","تفعلي‎","تفعل‎","تفعلا‎","تفعلن‎","يفعلن‎","أفعل‎","تفعل‎","يفعل‎","تفعلا‎","يفعلا‎","نفعل‎","تفعلوا‎","يفعلوا‎","تفعلي‎","تفعل‎","تفعلا‎","تفعلن‎","يفعلن‎","قصد","مقصد‎","قاصد‎","مقصود‎","قصدت‎","قصدت‎","قصد","قصدتما‎","قصدا‎","قصدنا‎","قصدتم‎","قصدوا‎","قصدت‎","قصدت‎","قصدتا‎","قصدتن‎","قصدن‎","أقصد‎","تقصد‎","يقصد‎","تقصدان‎","يقصدان‎","نقصد‎","تقصدون‎","يقصدون‎","تقصدين‎","تقصد‎","تقصدان‎","تقصدن‎","يقصدن‎","أقصد‎","تقصد‎","يقصد‎","تقصدا‎","يقصدا‎","نقصد‎","تقصدوا‎","يقصدوا‎","تقصدي‎","تقصد‎","تقصدا‎","تقصدن‎","يقصدن‎","أقصد‎","تقصد‎","يقصد‎","تقصدا‎","يقصدا‎","نقصد‎","تقصدوا‎","يقصدوا‎","تقصدي‎","تقصد‎","تقصدا‎","تقصدن‎","يقصدن‎","اقصد‎","اقصدا‎","اقصدوا‎","اقصدي‎","اقصدن‎","قصدت‎","قصدت‎","قصد","قصدتما‎","قصدا‎","قصدنا‎","قصدتم‎","قصدوا‎","قصدت‎","قصدت‎","قصدتا‎","قصدتن‎","قصدن‎","أقصد‎","تقصد‎","يقصد‎","تقصدان‎","يقصدان‎","نقصد‎","تقصدون‎","يقصدون‎","تقصدين‎","تقصد‎","تقصدان‎","تقصدن‎","يقصدن‎","أقصد‎","تقصد‎","يقصد‎","تقصدا‎","يقصدا‎","نقصد‎","تقصدوا‎","يقصدوا‎","تقصدي‎","تقصد‎","تقصدا‎","تقصدن‎","يقصدن‎","أقصد‎","تقصد‎","يقصد‎","تقصدا‎","يقصدا‎","نقصد‎","تقصدوا‎","يقصدوا‎","تقصدي‎","تقصد‎","تقصدا‎","تقصدن‎","يقصدن‎","زائل‎","زلت‎","زلت‎","زال","زلتما‎","زالا‎","زلنا‎","زلتم‎","زالوا‎","زلت‎","زالت‎","زالتا‎","زلتن‎","زلن‎","أزال‎","تزال‎","يزال‎","تزالان‎","يزالان‎","نزال‎","تزالون‎","يزالون‎","تزالين‎","تزال‎","تزالان‎","تزلن‎","يزلن‎","أزال‎","تزال‎","يزال‎","تزالا‎","يزالا‎","نزال‎","تزالوا‎","يزالوا‎","تزالي‎","تزال‎","تزالا‎","تزلن‎","يزلن‎","أزل‎","تزل‎","يزل‎","تزالا‎","يزالا‎","نزل‎","تزالوا‎","يزالوا‎","تزالي‎","تزل‎","تزالا‎","تزلن‎","يزلن‎","زل‎","زالا‎","زالوا‎","زالي‎","زلن‎","عملت‎","عملت‎","عمل","عملتما‎","عملا‎","عملنا‎","عملتم‎","عملوا‎","عملت‎","عملت‎","عملتا‎","عملتن‎","عملن‎","أعمل‎","تعمل‎","يعمل‎","تعملان‎","يعملان‎","نعمل‎","تعملون‎","يعملون‎","تعملين‎","تعملن‎","يعملن‎","أعمل‎","تعمل‎","يعمل‎","تعملا‎","يعملا‎","نعمل‎","تعملوا‎","يعملوا‎","تعملي‎","أعمل‎","تعمل‎","يعمل‎","نعمل‎","اعمل‎","اعملا‎","اعملوا‎","اعملي‎","اعملن‎","عملت‎","عملت‎","عمل","عملتما‎","عملا‎","عملنا‎","عملتم‎","عملوا‎","عملت‎","عملت‎","عملتا‎","عملتن‎","عملن‎","أعمل‎","تعمل‎","يعمل‎","تعملان‎","يعملان‎","نعمل‎","تعملون‎","يعملون‎","تعملين‎","تعملن‎","يعملن‎","أعمل","تعمل‎","يعمل‎","تعملا‎","يعملا‎","نعمل‎","تعملوا‎","يعملوا‎","تعملي‎","أعمل‎","تعمل‎","يعمل‎","نعمل‎","عملت‎","عننت‎","عننت‎","عن","عننتما‎","عنا‎","عننا‎","عننتم‎","عنوا‎","عننت‎","عنت‎","عنتا‎","عننتن‎","عنن‎","أعن‎","أعن‎","تعن‎","تعن‎","يعن‎","يعن‎","تعنان‎","تعنان‎","يعنان‎","يعنان‎","نعن‎","نعن‎","تعنون‎","تعنون‎","يعنون‎","يعنون‎","تعنين‎","تعنين‎","تعنن‎","تعنن‎","يعنن‎","يعنن‎","أعن‎","أعن‎","تعن‎","تعن‎","يعن‎","يعن‎","تعنا‎","تعنا‎","يعنا‎","يعنا‎","نعن‎","نعن‎","تعنوا‎","تعنوا‎","يعنوا‎","يعنوا‎","تعني‎","تعني‎","أعن‎","أعنن‎","أعن‎","أعنن‎","تعن‎","تعنن‎","تعن‎","تعنن‎","يعن‎","يعنن‎","يعن‎","يعنن‎","نعن‎","نعنن‎","نعن‎","نعنن‎","عن","عن","اعنن‎","عن","عن","اعنن‎","عنا‎","عنا‎","‎عنوا‎","عني‎","عني‎","اعنن‎","اعنن‎","يعن‎","يعن‎","يعن‎","يعنن‎","قمت‎","قمت‎","قام","قمتما‎","قاما‎","قمنا‎","قمتم‎","قاموا‎","قمت‎","قامت‎","قامتا‎","قمتن‎","قمن‎","أقوم‎","تقوم‎","يقوم‎","تقومان‎","يقومان‎","نقوم‎","تقومون‎","يقومون‎","تقومين‎","تقمن‎","يقمن‎","أقوم‎","تقوم‎","يقوم‎","تقوما‎","يقوما‎","نقوم‎","تقوموا‎","يقوموا‎","تقومي‎","أقم‎","تقم‎","يقم‎","نقم‎","قم‎","قوما‎","قوموا‎","قومي‎","قيم‎","يقام‎","يقام‎","يقم‎","وددت‎","وددت‎","ود","وددتما‎","ودا‎","وددنا‎","وددتم‎","ودوا‎","وددت‎","ودت‎","ودتا‎","وددتن‎","وددن‎","أود‎","تود‎","يود‎","تودان‎","يودان‎","نود‎","تودون‎","يودون‎","تودين‎","توددن‎","يوددن‎","أود‎","تود‎","يود‎","تودا‎","يودا‎","نود‎","تودوا‎","يودوا‎","تودي‎","أود‎","أودد‎","تود‎","تودد‎","يود‎","يودد‎","نود‎","نودد‎","ود","ايدد‎","ودي‎","ايددن‎","وددت‎","وددت‎","ود","وددتما‎","ودا‎","وددنا‎","وددتم‎","ودوا‎","وددت‎","ودت‎","ودتا‎","وددتن‎","وددن‎","أود‎","تود‎","يود‎","تودان‎","يودان‎","نود‎","تودون‎","يودون‎","تودين‎","توددن‎","يوددن‎","أود‎","تود‎","يود‎","تودا‎","يودا‎","نود‎","تودوا‎","يودوا‎","تودي‎","أود‎","أودد‎","تود‎","تودد‎","يود‎","يودد‎","نود‎","نودد‎","حاولت‎","حاولت‎","حاول","حاولتما‎","حاولا‎","حاولنا‎","حاولتم‎","حاولوا‎","حاولت‎","حاولت‎","حاولتا‎","حاولتن‎","حاولن‎","أحاول‎","تحاول‎","يحاول‎","تحاولان‎","يحاولان‎","نحاول‎","تحاولون‎","يحاولون‎","تحاولين‎","تحاولن‎","يحاولن‎","أحاول‎","تحاول‎","يحاول‎","تحاولا‎","يحاولا‎","نحاول‎","تحاولوا‎","يحاولوا‎","تحاولي‎","أحاول‎","تحاول‎","يحاول‎","نحاول‎","حاول","حاولا‎","حاولوا‎","حاولي‎","حاولن‎","حوولت‎","حوولت‎","حوول‎","حوولتما‎","حوولا‎","حوولنا‎","حوولتم‎","حوولوا‎","حوولت‎","حوولت‎","حوولتا‎","حوولتن‎","حوولن‎","أحاول‎","تحاول‎","يحاول‎","تحاولان‎","يحاولان‎","نحاول‎","تحاولون‎","يحاولون‎","تحاولين‎","تحاولن‎","يحاولن‎","أحاول‎","تحاول‎","يحاول‎","تحاولا‎","يحاولا‎","نحاول‎","تحاولوا‎","يحاولوا‎","تحاولي‎","أحاول‎","تحاول‎","يحاول‎","نحاول‎","احتجت‎","احتجت‎","احتاج","احتجتما‎","احتاجا‎","احتجنا‎","احتجتم‎","احتاجوا‎","احتجت‎","احتاجت‎","احتاجتا‎","احتجتن‎","احتجن‎","أحتاج‎","تحتاج‎","يحتاج‎","تحتاجان‎","يحتاجان‎","نحتاج‎","تحتاجون‎","يحتاجون‎","تحتاجين‎","تحتجن‎","يحتجن‎","أحتاج‎","تحتاج‎","يحتاج‎","تحتاجا‎","يحتاجا‎","نحتاج‎","تحتاجوا‎","يحتاجوا‎","تحتاجي‎","أحتج‎","تحتج‎","يحتج‎","نحتج‎","احتج‎","احتاجي‎","احتجت‎","احتجت‎","احتيج‎","احتجتما‎","احتيجا‎","احتجنا‎","احتجتم‎","احتيجوا‎","احتجت‎","احتيجت‎","احتيجتا‎","احتجتن‎","احتجن‎","أحتاج‎","تحتاج‎","يحتاج‎","تحتاجان‎","يحتاجان‎","نحتاج‎","تحتاجون‎","يحتاجون‎","تحتاجين‎","تحتجن‎","يحتجن‎","أحتاج‎","تحتاج‎","يحتاج‎","تحتاجا‎","يحتاجا‎","نحتاج‎","تحتاجوا‎","يحتاجوا‎","تحتاجي‎","أحتج‎","تحتج‎","يحتج‎","نحتج‎","عنيت‎","عنيت‎","عنى","عنيتما‎","عنيا‎","عنينا‎","عنيتم‎","عنوا‎","عنيت‎","عنت‎","عنتا‎","عنيتن‎","عنين‎","أعني‎","تعني‎","يعني‎","تعنيان‎","يعنيان‎","نعني‎","تعنون‎","يعنون‎","تعنين‎","يعنين‎","أعني‎","تعني‎","يعني‎","تعنيا‎","يعنيا‎","نعني‎","تعنوا‎","يعنوا‎","أعن‎","تعن‎","يعن‎","نعن‎","اعن‎","اعنيا‎","اعنوا‎","اعني‎","اعنين‎","عنيت‎","عنيت‎","عني‎","عنيتما‎","عنيا‎","عنينا‎","عنيتم‎","عنوا‎","عنيت‎","عنيت‎","عنيتا‎","عنيتن‎","عنين‎","أعنى‎","تعنى‎","يعنى‎","تعنيان‎","يعنيان‎","نعنى‎","تعنون‎","يعنون‎","تعنين‎","يعنين‎","تعنيا‎","يعنيا‎","تعنوا‎","يعنوا‎","تعني‎","أعن‎","تعن‎","يعن‎","نعن‎","يعنين","عندي‎","عندنا‎","عندك‎","عندك‎","عندكما‎","عندكم‎","عندكن‎","عنده‎","عندها‎","عندهما‎","عندهم‎","عندهن‎","بقاء","البقاء‎","بقاء","البقاء‎","بقاء","بقاء","البقاء‎","بقاء","بقاء","البقاء‎","بقاء"],P=["جيد","آخر","رائع","أفضل","جيدة","نفس","فقط","مجرد","كبير","الأفضل","عظيم","جميلة","كبيرة","رائعة","جديد","صغيرة","الصغير","متأكد","مهما","صغير","جيدا","الصغيرة","أكبر","جديدة","افضل","الجديد","طويلة","ممكن","اخر","طويل","الممكن","الخاصة","سيئة","الكبير","حقيقي","بعيدا","الجيد","مهم","الجديدة","كثير","الكبيرة","القليل","ممتاز","الحقيقي","سيء","معا","قليل","بعيد","واضح","مختلف","متأكدة","الصعب","أسوأ","حوالي","كامل","سيئ","بالإمكان","بكثير","خاص","سوية","مختلفة","قريب","الأخير","الأخيرة","الافضل","خير"],z=["واو","هيا","آه","هيه","هاى","أوه","أخخ","هووه","صه","أوبس","أها","آخ","أح","شو","ههههه"],A=["كلغ","ملغ","الكوارت","جرام","جالون","ربع ","كوارتات","لتر","سنتيلتر","مليمتر","دزينة","ملاعق","ذراع","قبضة","عربية","قصبة","بريد","قدم","ربع"],E=["الأمر","الأشياء","الشيء","الأمور","الامر","أشياء","جزء","الاشياء","الامور","الطريقة","طريقا","طرق","قطعة","الأجزاء","مادة","مرات","بالمئة","جانب","جوانب","بند","عنصر","عناصر","بنود","فكرة","موضوع","تفصيل","تفاصيل","فرق","فروق"],H=["نعم","حسنا","إنه","إني","إنها","إنك","إنكم","إنهم","إنكما","إنهما","إننا","إنهن","فإن","إنني","كلا","أجل","أنه","أنك","انها","أنها","بأن","أنني","أنكم","أنهما","أنكما","أنهن","أنهم","انك","أني","أننا","انهم","بأنك","لأنه","بأنه","اني","أننى","انني","اننا","بأنني","اننى","بأني","بأنها","وأن","بأننا","للتو","ها","رجاء","تفضل","اجل","حالك","فضلك","أرجوك","هكذا","انة","بلى","أعلى","انى","لا","لن","لم","ولا","ألا","ولم","ولن","عدم","فلا","فلن","يلا","يلة"],k=["عندما","مثل","بالطبع","لأن","إذن","بشكل","متى","حتى","قبل","ثم","عند","حيث","بينما","لمدة","مثلك","حين","بأي","زلت","وعندما","أثناء","حينما","أولا","لاحقا","أما","وإلا","لفترة","كلما","عندنا","إلا","الا"],D=([].concat(c,P),[].concat(s,y,F,_,l,w,d),[].concat(k,R,a,u,m,z,i,W,b,j,M,h,O,p,x,v,S,H,L,A,["اليوم","يوم","ليلة","دقيقة","ساعة","عام","دقائق","سنة","الساعة","أيام","العام","الأسبوع","غدا","ساعات","أمس","أشهر","الأيام","شهر","السنة","الغد","يوما","ثانية","ثوان","أسبوع","أسابيع","أسبوعا","بالأمس"],E,f,g),[].concat(s,i,c,l,m,a,u,d,h,p,x,v,S,R,L,W,b,y,_,O,j,k,["الآن","كذلك","ربما","كما","لذا","الان","الأن","بما","أيضا","بالنسبة","فحسب","والآن","بكل","مما","ايضا","بخصوص","القادمة","المحتمل","مازال","مازلت","طالما","بالتأكيد","بدلا","بوضوح","فورا","حالا","التالي","حاليا","بالعادة","تقريبا","ببساطة","اختياريا","أحيانا","أبدا","بالمناسبة","خاصة","مؤخرا","نسبيا"],w,M,z,P,A,E,H,["السيد","السيدة","افندم","سعادتك","استاذة","استاذ","مدام","أستاذ","أسـتاذة","الأخ","الأخت"],f,g,F));var T=["كذلك","ولكن","ولذلك","حاليا","أخيرا","بالطبع","ثم","بما","كما","لما","إنما","ليتما","إما","أينما","حيثما","كيفما","أيما","أيّما","بينما","ممّا","إلاّ","ألّا","لئلّا","حبّذا","سيّما","لكن","بالتالي","هكذا","أو","أم","لذلك","مثلا","تحديدا","عموما","لاسيما","خصوصا","بالأخص","خاصة","بالمثل","لأن","بسبب","إذا","عندما","حين","متى","قبل","بعد","منذ","أيضا","ريثما","بين"].concat(["إلا إذا","إلا أن","إلى آخره","إلى الأبد","إلى أن","آن لك أن","آن له أن","آن لعلي","بعد ذلك","بما أن","بما فيه","حتى لا","حتى لو","عليك أن","علينا أن","عليه أن","عليكم أن","على محمد أن","فيما بعد","لا أحد","لا بأس أن","لا بد من","لا بد من أن","لا سيما","لا شيء","لا غير","لا هذا ولا ذاك","له أن","لها أن","لك أن","لكم أن","ما لم","مع هذا ، مع ذلك","من أجل أن","من أجلك","من أجلها","من أجل سارة","من أجل اليمن","من دون ، بدون","منذ ذلك الحين","بالإضافة إلى ذلك","في نهاية المطاف","في الوقت الحالي","علاوة على ذلك","أنا أيضا","بدلا من ذلك","في الواقع","بناء على ذلك","ومع ذلك","في الحقيقة","من ناحية أخرى","لا يزال","وفي الوقت نفسه","زيادة على ذلك","زيادة على","علاوة على","ما عدا","مع ذلك","غير أن","من جهة أخرى","على عكس ذلك","نتيجة لذلك","من ثم","على سبيل المثال","على وجه الخصوص","على وجه التحديد","بصفة عامة","قبل كل شيء","في النهاية","بصورة شاملة","رغم أن","مع ان","على الرغم من","من هنا"," لهذا السبب","في حالة","في أقرب وقت","على أي حال","في نفس الوقت","من بين"]),Y=[["لا","ولا"],["إما","أو"],["ربما","ربما"],["حينئذ","عندئذ"],["إما","وإما"],["كل من","و"]];function B(e){const t=["ل","ب","ك","و","ف","س","أ","ال","وب","ول","لل","فس","فب","فل","وس","وال","بال","فال","كال","ولل","وبال"],r=[];r.push(...t.map(t=>t+e));let n="";for(const r of t)e.startsWith(r)&&(n=e.slice(r.length));return n.length>0&&(r.push(n),r.push(...t.map(e=>e+n))),r}var C=r(1);const q=function(e,t){const r=t.externalStemmer,n=r.characters;return r.wordsWithLastAlefRemoved.includes(e)?e+n.alef:r.wordsWithLastHamzaRemoved.includes(e)?e+n.alef_hamza_above:r.wordsWithLastMaksoraRemoved.includes(e)?e+n.yeh_maksorah:r.wordsWithLastYehRemoved.includes(e)?e+n.yeh:void 0},G=function(e,t){const r=t.externalStemmer,n=r.characters;return r.wordsWithMiddleWawRemoved.includes(e)?e[0]+n.waw+e[1]:r.wordsWithMiddleYehRemoved.includes(e)?e[0]+n.yeh+e[1]:void 0},I=function(e,t,r,n){const o=e.replace(new RegExp(r[0]),r[1]);if(o!==e)return n(o,t)},J=function(e,t){const r=t.externalStemmer.characters;if(t.externalStemmer.threeLetterRoots.includes(e))return e;e[0]!==r.alef&&e[0]!==r.waw_hamza&&e[0]!==r.yeh_hamza||(e=r.alef_hamza_above+e.slice(1));const n=I(e,t,t.externalStemmer.regexRemoveLastWeakLetterOrHamza,q);if(n)return n;const o=I(e,t,t.externalStemmer.regexRemoveMiddleWeakLetterOrHamza,G);if(o)return o;const s=t.externalStemmer.regexReplaceMiddleLetterWithAlef,i=t.externalStemmer.regexReplaceMiddleLetterWithAlefWithHamza,c=e.replace(new RegExp(s[0]),s[1]);e=c===e?e.replace(new RegExp(i[0]),i[1]):c;const a=t.externalStemmer.regexRemoveShaddaAndDuplicateLastLetter;return e.replace(new RegExp(a[0]),a[1])},K=function(e,t,r){return 6===e.length&&e[3]===e[5]&&2===t?J(e.substring(1,4),r):e},N=function(e,t,r,n){const o=n.externalStemmer.characters;if(e.length-3<=r){let r="";for(let n=0;n<e.length;n++)t[n]!==o.feh&&t[n]!==o.aen&&t[n]!==o.lam||(r=r.concat(e[n]));return J(r,n)}return e},Q=function(e,t,r){const n=r.externalStemmer.characters;let o=0;for(let r=0;r<e.length;r++)t[r]===e[r]&&t[r]!==n.feh&&t[r]!==n.aen&&t[r]!==n.lam&&o++;return o},U=function(e,t){const r=function(e,t){return e.replace(new RegExp(t[0]),t[1])}(e,t.externalStemmer.regexReplaceFirstHamzaWithAlef);for(const e of t.externalStemmer.patterns)if(e.length===r.length){const n=Q(r,e,t),o=K(r,n,t);if(o!==r)return{word:o,rootFound:!0};const s=N(r,e,n,t);if(s!==r)return{word:s,rootFound:!0}}if(r!==e)return{word:r,rootFound:!1}},V=function(e,t){return 2===e.length?function(e,t){if(t.externalStemmer.wordsWithRemovedDuplicateLetter.includes(e))return e+e.substring(1);const r=q(e,t);if(r)return r;const n=function(e,t){const r=t.externalStemmer,n=r.characters;return r.wordsWithFirstWawRemoved.includes(e)?n.waw+e:r.wordsWithFirstYehRemoved.includes(e)?n.yeh+e:void 0}(e,t);if(n)return n;return G(e,t)||e}(e,t):3===e.length?J(e,t):4===e.length&&t.externalStemmer.fourLetterRoots.includes(e)?e:void 0},X=function(e,t){for(const r of t)if(e.startsWith(r))return e.substring(r.length,e.length);return e},Z=function(e,t){const r=function(e,t){for(const r of t)if(e.endsWith(r))return e.slice(0,-r.length);return e}(e,t.externalStemmer.suffixes);if(r!==e){const e=V(r,t);if(e)return{word:e,rootFound:!0};const n=U(r,t);if(n)return n}},$=function(e,t){let r=X(e,t.externalStemmer.prefixes);if(r!==e){const e=V(r,t);if(e)return{word:e,rootFound:!0};const n=U(r,t);if(n){if(!0===n.rootFound)return n;r=n.word}const o=Z(r,t);if(o)return o}},ee=function(e,t){const r=V(e,t);if(r)return{word:r,rootFound:!0};const n=U(e,t);let o=e;if(n){if(!0===n.rootFound)return n;o=n.word}const s=Z(o,t);if(s)return s;return $(o,t)||(o!==e?{word:o,rootFound:!1}:void 0)};const{baseStemmer:te}=n.languageProcessing;function re(e){const t=Object(C.get)(e.getData("morphology"),"ar",!1);return t?e=>function(e,t){const r=t.externalStemmer.regexRemovingDiacritics;e.replace(new RegExp(r),"");const n=V(e,t);if(n)return n;const o=U(e,t);if(o){if(!0===o.rootFound)return o.word;e=o.word}const s=function(e,t){const r=X(e,t.externalStemmer.definiteArticles);if(r!==e){return ee(r,t)||{word:r,rootFound:!1}}}(e,t);if(s){if(!0===s.rootFound)return s.word;e=s.word}const i=function(e,t){let r="";if(e.length>3&&e.startsWith(t.externalStemmer.characters.waw)){r=e.substring(1);const n=ee(r,t);if(n)return n}}(e,t);if(i){if(!0===i.rootFound)return i.word;e=i.word}const c=Z(e,t);if(c)return c.word;const a=$(e,t);return a?a.word:e}(e,t):te}var ne=["غودرت","غودر","غودرتما","غودرا","غودرتا","غودرنا","غودرتم","غودرتنّ","غودروا","غودرن","مغادر","محثوث","تجرى","يجرى","مجرى","تبقى","يبقى","مبقى","تجوهلت","تجوهل","تجوهلت","تجوهلتما","تجوهلا","تجوهلتا","تجوهلنا","تجوهلتم","تجوهلتنّ","تجوهلوا","تجوهلن","متجاهل","تشوورت","تشوور","تشوورتما","تشوورا","تشوورتا","تشوورنا","تشوورتم","تشوورتنّ","تشووروا","تشوورن","متشاور","نوقشت","نوقش","نوقشتما","نوقشا","نوقشتا","نوقشنا","نوقشتم","نوقشتنّ","نوقشوا","نوقشن","مناقش","معود","ترتدى","يرتدى","نرتدى","مرتدى","تنتهى","ينتهى","ننتهى","تجووزت","تجووز","تجووزتما","تجووزا","تجووزتا","تجووزنا","تجووزتم","تجووزتنّ","تجووزوا","تجووزن","حوولت","حوول","حوولتما","حوولا","حوولتا","حوولنا","حوولتم","حوولتنّ","حوولوا","حوولن","تعولجت","تعولج","تعولجتما","تعولجا","تعولجتا","تعولجنا","تعولجتم","تعولجتنّ","تعولجوا","تعولجن","متعالج","أشير","أشيرا","أشيرتا","أشيروا","تشار","تشارين","يشار","تشاران","يشاران","نشار","تشارون","يشارون","جيء","جيئت","جيئا","جيئتا","جيئوا","أجاء","تجاء","تجائين","يجاء","تجاءان","يجاءان","نجاء","تجائون","تجأن","يجائون","يجأن","يوصى","توصى","نوصى","موصى","احتيج","احتيجت","احتيجا","احتيجتا","احتيجوا","تعطى","يعطى","نعطى","معطى","تعوليت","تعولي","تعوليتما","تعوليا","تعوليتا","تعولينا","تعوليتم","تعوليتنّ","تعولوا","تعولين"," شوركت","شورك","شوركتما","شوركا","شوركتا","شوركنا","شوركتم","شوركتنّ","شوركوا","شوركن","تتولّى","يتولّى","نتولّى","زيد","زيدت","زيدا","زيدتا","زيدوا","أزاد","تزاد","تزادين","يزاد","تزادان","يزادان","نزاد","تزادون","يزادون","سوعدت","سوعد","سوعدتما","سوعدا","سوعدتا","سوعدنا","سوعدتم","سوعدتنّ","سوعدوا","سوعدن","رئيت","رئي","رئيتما","رئيا","رئيتا","رئينا","رئيتم","رئيتنّ","رؤوا","رئين","تفووضت","تفووض","تفووضتما","تفووضا","تفووضتا","تفووضنا","تفووضتم","تفووضتنّ","تفووضوا","تفووضن","تزويدت","تزويد","تزويدتما","تزويدا","تزويدتا","تزويدنا","تزويدتم","تزويدتنّ","تزويدوا","تزويدن","تتلقّى","يتلقّى","نتلقّى","لوحظت","لوحظ","لوحظتما","لوحظا","لوحظتا","لوحظنا","لوحظتم","لوحظتنّ","لوحظوا","لوحظن","تسعى","يسعى","نسعى","أوتيت","أوتي","أوتيتما","أوتيا","أوتيتا","أوتينا","أوتيتم","أوتيتنّ","أوتوا","أوتين","ووفقت","ووفق","ووفقتما","ووفقا","ووفقتا","ووفقنا","ووفقتم","ووفقتنّ","ووفقوا","ووفقن","إين","إينت","إينا","إينتا","إينوا","أؤان","تؤان","تؤانين","يؤان","تؤانان","يؤانان","نؤان","تؤانون","يؤانون","أوخذت","أوخذ","أوخذتما","أوخذا","أوخذتا","أوخذنا","أوخذتم","أوخذتنّ","أوخذوا","أوخذن","لهيت","لهي","لهيتما","لهيا","لهيتا","لهينا","لهيتم","لهيتم","لهوا","لهين","ألهى","تلهى","يلهى","تلهى","تلهيان","يلهيان","نلهى","يلهين","تتبقّى","يتبقّى","نتبقّى","تنوولت","تنوول","تنوولتما","تنوولا","تنوولتا","تنوولنا","تنوولتم","تنوولتنّ","تنوولوا","تنوولن","تووجهت","تووجه","تووجهتما","تووجها","تووجهتا","تووجهنا","تووجهتم","تووجهتنّ","تووجهوا","تووجهن","تبودلت","تبودل","تبودلتما","تبودلا","تبودلتا","تبودلنا","تبودلتم","تبودلتم","تبودلوا","تبودلن","تعورضت","تعورض","تعورضتما","تعورضا","تعورضتا","تعورضنا","تعورضتم","تعورضتنّ","تعورضوا","تعورضن","تعورضن","تعنى","يعنى","نعنى","طولبت","طولب","طولبتما","طولبا","طولبتا","طولبنا","طولبتم","طولبتنّ","طولبوا","طولبن","قيم","قيمت","قيما","قيمتا","قيموا","أقام","تقام","تقامين","يقام","تقامان","يقامان","نقام","تقامون","يقامون","أنشئت","أنشئ","أنشئتما","أنشئا","أنشئتا","أنشئنا","أنشئتم","أنشئتنّ","أنشئوا","أنشئن","تنشأ","تنشئين","ينشأ","تنشآن","ينشآن","ننشأ","تنشأون","ينشأون","ينشأن","تنشأن","غطّي","تغطّى","يغطّى","نغطّى","قوتلت","قوتل","قوتلتما","قوتلا","قوتلتا","قوتلنا","قوتلنا","قوتلتنّ","قوتلوا","قوتلن","أسمى","تسمى","يسمى","نسمى","أوثرت","أوثر","أوثرتما","أوثرا","أوثرتا","أوثرنا","أوثرتم","أوثرتنّ","أوثروا","أوثرن","غنّي","أغنّى","تغنّى","يغنّى","نغنّى","استفيد","استفيدت","استفيدا","استفيدتا","استفيدوا","أستفاد","تستفاد","تستفادين","يستفاد","تستفادان","يستفادان","نستفاد","تستفادون","يستفادون","أثير","أثيرت","أثيرا","أثيرا","أثيروا","أثار","تثار","تثارين","يثار","تثاران","يثاران","نثار","تثارون","يثارون","تدّعى","يدّعى","ندّعى","عيش","عيشت","عيشا","عيشتا","عيشوا","أعاش","تعاش","تعاشين","يعاش","تعاشان","يعاشان","نعاش","تعاشون","يعاشون","ووجهت","ووجه","ووجهتما","ووجها","ووجهتا","ووجهنا","ووجهتم","ووجهتنّ","ووجهوا","ووجهن","دعيت","دعي","دعيا","دعيتا","دعينا","دعيتم","دعيتنّ","دعوا","دعين","أدعى","تدعى","تدعين","تدعين","تدعيان","يدعيان","يدعين","اختير","اختيرت","اختيرا","اختيرتا","اختيروا","اخترن","شوهدت","شوهد","شوهدتما","شوهدا","شوهدتا","شوهدنا","شوهدتم","شوهدتنّ","شوهدوا","شوهدن","أدّي","أؤدّى","تؤدّى","يؤدّى","نؤدّى","أفيدت","أفيدا","أفيدتا","أفيدوا","يفادون","تفادون","نفاد","تفادان","يفادان","تفاد","يفاد","تفادين","أفاد","تكوملت","تكومل","تكوملتما","تكوملا","تكوملتا","تكوملنا","تكوملتم","تكوملتنّ","تكوملوا","تكوملن","أهنّئ","تهنّئ","تهنّئين","يهنّئ","يهنّئ","يهنّئان","تهنّئان","نهنّئ","تهنّئون","تهنّئن","هنّئوا","هنّئن","أهنّأ","تهنّأ","يهنّأ","تهنّآن","نهنّأ","تهنّأون","تهنّأن","يهنّأون","يهنّأن","سوهمت","سوهم","سوهمتما","سوهما","سوهمتا","سوهمنا","سوهمتم","سوهمتنّ","سوهموا","سوهمن","أرمى","ترمى","يرمى","نرمى","أبلغت"];const{getWords:oe}=n.languageProcessing;function se(e){const t=oe(e),r=[];for(let e of t){e.startsWith("و")&&(e=e.slice(1));let t=-1;e.length>=2&&(t=e[1].search("ُ")),(-1!==t||ne.includes(e))&&r.push(e)}return 0!==r.length}const{AbstractResearcher:ie}=n.languageProcessing;class ce extends ie{constructor(e){super(e),delete this.defaultResearches.getFleschReadingScore,Object.assign(this.config,{language:"ar",passiveConstructionType:"morphological",firstWordExceptions:o,functionWords:D,transitionWords:T,twoPartTransitionWords:Y}),Object.assign(this.helpers,{createBasicWordForms:B,getStemmer:re,isPassiveSentence:se})}}}});