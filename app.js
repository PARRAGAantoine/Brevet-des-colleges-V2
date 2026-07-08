(function () {
  const catalog = window.BREVET_V2_CATALOG;
  const storageKey = "brevetSprintV2Progress";
  const settingsKey = "brevetSprintV2Settings";
  const view = document.getElementById("view");

  const state = {
    currentView: "home",
    selectedSubjectId: catalog.subjects[0].id,
    selectedThemeId: catalog.subjects[0].themes[0].id,
    selectedCourseId: catalog.subjects[0].themes[0].courses[0].id,
    exerciseIndex: 0
  };

  const progress = loadProgress();
  const settings = loadSettings();
  const flat = buildFlatIndex();
  applyTheme(settings.theme);

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });

  view.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    if (button.dataset.view) {
      showView(button.dataset.view);
      return;
    }
    if (button.dataset.openSubject) {
      openSubject(button.dataset.openSubject);
      return;
    }
    if (button.dataset.openTheme) {
      openTheme(button.dataset.openTheme);
      return;
    }
    if (button.dataset.openBadges) {
      state.selectedSubjectId = button.dataset.openBadges;
      showView("badges");
      return;
    }
    if (button.dataset.openCourse) {
      openCourse(button.dataset.openCourse);
      return;
    }
    if (button.dataset.startCourseExercises) {
      state.selectedCourseId = button.dataset.startCourseExercises;
      syncSelectionFromCourse();
      state.exerciseIndex = 0;
      showView("practice");
      return;
    }
    if (button.dataset.markRead) {
      markCourseRead(button.dataset.markRead);
      openCourse(button.dataset.markRead);
      return;
    }
    if (button.dataset.answer) {
      answerQcm(button.dataset.answer);
      return;
    }
    if (button.dataset.checkShortAnswer) {
      answerShort();
      return;
    }
    if (button.dataset.help) {
      showExerciseHelp();
      return;
    }
    if (button.dataset.nextExercise) {
      nextExercise();
      return;
    }
    if (button.dataset.mail) {
      window.location.href = "mailto:parraga.antoine@gmail.com?subject=Avis%20Brevet%20Sprint";
    }
  });

  view.addEventListener("change", (event) => {
    const target = event.target;
    if (target.id === "courseJump") {
      openCourse(target.value);
    }
    if (target.id === "themeMode") {
      settings.theme = target.value;
      saveSettings();
      applyTheme(settings.theme);
      renderSettings();
    }
  });

  showView("home");

  function showView(name) {
    state.currentView = name;
    updateActiveNav(name);
    renderCurrentView();
  }

  function updateActiveNav(name) {
    const activeName = ["subject", "theme", "course", "practice", "annales"].includes(name) ? "subjects" : name;
    document.querySelectorAll("[data-view]").forEach((button) => {
      button.classList.toggle("active", button.dataset.view === activeName);
    });
  }

  function renderCurrentView() {
    if (state.currentView === "home") renderHome();
    if (state.currentView === "subjects") renderSubjects();
    if (state.currentView === "subject") renderSubjectDashboard();
    if (state.currentView === "theme") renderThemeCourses();
    if (state.currentView === "course") renderCourseDetail(getCourse(state.selectedCourseId));
    if (state.currentView === "practice") renderPractice();
    if (state.currentView === "annales") renderAnnales();
    if (state.currentView === "badges") renderBadges();
    if (state.currentView === "progress") renderProgress();
    if (state.currentView === "settings") renderSettings();
    if (state.currentView === "contact") renderContact();
  }

  function renderHome() {
    view.innerHTML = `
      <section class="landing-hero">
        <div class="hero-copy">
          <span class="eyebrow">Révision brevet</span>
          <h1>Brevet Sprint</h1>
          <p>Une application simple pour réviser le brevet avec des cours courts, des exercices liés au cours et une aide claire quand tu bloques.</p>
          <p class="privacy-note">Tes résultats, tes erreurs et tes badges restent sur ton appareil : toi seul peux les voir.</p>
          <div class="hero-actions">
            <button class="primary big-action" data-view="subjects" type="button">Accès aux matières</button>
            <button class="secondary big-action" data-view="settings" type="button">Paramètres</button>
            <button class="secondary big-action" data-view="contact" type="button">Me contacter</button>
          </div>
        </div>
        <div class="landing-visual" aria-hidden="true">
          <div class="hero-medal">
            <span>B</span>
            <strong>Objectif</strong>
            <small>avancer petit à petit</small>
          </div>
          <div class="floating-card card-course">
            <strong>Cours</strong>
            <span>Pythagore</span>
          </div>
          <div class="floating-card card-practice">
            <strong>Exercice</strong>
            <span>Question guidée</span>
          </div>
          <div class="floating-card card-badge">
            <strong>Badge</strong>
            <span>Bronze</span>
          </div>
        </div>
      </section>

      <section class="feature-strip section">
        <article>
          <strong>Cours rangés</strong>
          <span>Matière, thème, cours : tu sais toujours où tu es.</span>
        </article>
        <article>
          <strong>Aide par exercice</strong>
          <span>Le bouton d’aide explique la question en cours.</span>
        </article>
        <article>
          <strong>Progression claire</strong>
          <span>Tu vois les cours lus, les exercices réussis et ce qu’il reste à travailler.</span>
        </article>
      </section>
    `;
  }

  function renderSubjects() {
    const stats = getGlobalProgress();
    view.innerHTML = `
      <header class="page-heading">
        <span class="tag">Matières</span>
        <h1>Choisis une matière</h1>
        <p>Commence par une matière, puis avance thème par thème. Chaque carte montre où tu en es.</p>
      </header>

      <section class="progress-hero section">
        <div>
          <span class="eyebrow">Progression générale</span>
          <h2>${stats.globalPercent} %</h2>
          <p>${formatReadCourseCount(stats.readCourses)} sur ${stats.totalCourses}, ${stats.uniqueExercisesDone} / ${stats.totalExercises} exercices faits.</p>
        </div>
        <div class="progress-ring" style="--value:${stats.globalPercent}">
          <span>${stats.globalPercent}%</span>
        </div>
      </section>

      <section class="stat-grid section">
        <article class="stat-card"><span>Cours</span><strong>${stats.readCourses} / ${stats.totalCourses}</strong><small>lus et compris</small></article>
        <article class="stat-card"><span>Exercices</span><strong>${stats.uniqueExercisesDone} / ${stats.totalExercises}</strong><small>${formatAnswerCount(stats.totalAnswers)} enregistrée${stats.totalAnswers > 1 ? "s" : ""}</small></article>
        <article class="stat-card"><span>Réussite</span><strong>${stats.successRate} %</strong><small>sur les exercices faits</small></article>
        <article class="stat-card"><span>À reprendre</span><strong>${stats.pendingErrors}</strong><small>erreurs à corriger</small></article>
      </section>

      <section class="section">
        <div class="section-title">
          <h2>Cartes des matières</h2>
          <span>${stats.totalCourses} cours au total · ${stats.totalExercises} exercices au total</span>
        </div>
        <div class="subject-grid">
          ${catalog.subjects.map(renderSubjectCard).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <h2>Badges généraux</h2>
          <span>Des repères simples pour visualiser l’avancement.</span>
        </div>
        <div class="badge-row">
          ${renderGeneralBadges(stats)}
        </div>
      </section>
    `;
  }

  function renderSubjectCard(subject) {
    const stats = getSubjectProgress(subject.id);
    const courseBadge = getBadge(stats.coursePercent, stats.readCourses > 0);
    const exerciseBadge = getBadge(stats.exerciseProgress, stats.totalAnswers > 0);
    return `
      <article class="subject-card ${courseBadge.className}">
        <div class="subject-card-top">
          <div>
            <span class="tag">${subject.label}</span>
            <h3>${subject.label}</h3>
          </div>
        </div>
        <div class="progress-duo">
          <div class="progress-box">
            <div class="progress-box-head">
              <span>Cours</span>
              <div class="mini-medal image-medal ${courseBadge.className}">
                <img src="${getSubjectBadgeAsset(subject.id, courseBadge.className)}" alt="">
              </div>
            </div>
            <div class="progress-track"><span style="width:${stats.coursePercent}%"></span></div>
            <strong>${stats.readCourses} / ${stats.totalCourses}</strong>
            <small>Badge : ${courseBadge.label}</small>
          </div>
          <div class="progress-box">
            <div class="progress-box-head">
              <span>Exercices</span>
              <div class="mini-medal image-medal ${exerciseBadge.className}">
                <img src="assets/badges/badge-questions-${exerciseBadge.className}.webp" alt="">
              </div>
            </div>
            <div class="progress-track exercise"><span style="width:${stats.exerciseProgress}%"></span></div>
            <strong>${stats.uniqueExercisesDone} / ${stats.totalExercises}</strong>
            <small>Badge : ${exerciseBadge.label}</small>
          </div>
        </div>
        <div class="button-row">
          <button class="primary" data-open-subject="${subject.id}" type="button">Voir la matière</button>
          <button class="secondary" data-open-badges="${subject.id}" type="button">Badges</button>
        </div>
      </article>
    `;
  }

  function renderGeneralBadges(stats) {
    return getGeneralBadgeDefinitions(stats).map((badge) => {
      const stateClass = badge.unlocked ? badge.tier : "locked";
      return `
      <article class="badge-card compact ${stateClass}">
        <div class="badge-art ${stateClass}">
          <img src="${badge.image}" alt="">
        </div>
        <span class="badge-pill">${badge.unlocked ? badge.label : "Verrouillé"}</span>
        <strong>${badge.title}</strong>
        <small>${badge.text}</small>
        <em>${badge.unlocked ? "Débloqué" : badge.requirement}</em>
        <span class="badge-next">${badge.nextText}</span>
      </article>
    `;
    }).join("");
  }

  function renderSubjectDashboard() {
    const subject = getSubject(state.selectedSubjectId);
    const stats = getSubjectProgress(subject.id);
    const courseBadge = getBadge(stats.coursePercent, stats.readCourses > 0);
    const exerciseBadge = getBadge(stats.exerciseProgress, stats.totalAnswers > 0);
    const nextCourse = getNextCourseForSubject(subject.id);
    view.innerHTML = `
      <header class="subject-hero ${courseBadge.className}">
        <div>
          <span class="eyebrow">Matière</span>
          <h1>${subject.label}</h1>
          <p>${formatReadCourseCount(stats.readCourses)} sur ${stats.totalCourses} · ${stats.uniqueExercisesDone} exercices faits sur ${stats.totalExercises}. Continue par un cours ou choisis un thème.</p>
        </div>
        <div class="subject-badge">
          <div class="badge-medal image-medal ${courseBadge.className}">
            <img src="${getSubjectBadgeAsset(subject.id, courseBadge.className)}" alt="">
          </div>
          <strong>Cours : ${courseBadge.label}</strong>
          <small>Exercices : ${exerciseBadge.label}</small>
        </div>
      </header>
      ${renderBreadcrumb([
        ["Matières", "subjects"],
        [subject.label, "subject"]
      ])}

      <section class="stat-grid section">
        <article class="stat-card"><span>Cours lus</span><strong>${stats.readCourses} / ${stats.totalCourses}</strong><small>${stats.coursePercent} % des cours</small></article>
        <article class="stat-card"><span>Exercices faits</span><strong>${stats.uniqueExercisesDone} / ${stats.totalExercises}</strong><small>${stats.totalAnswers} réponses · ${stats.successRate} % de réussite</small></article>
        <article class="stat-card"><span>Erreurs</span><strong>${stats.pendingErrors}</strong><small>à reprendre</small></article>
        <article class="stat-card"><span>Exercices disponibles</span><strong>${stats.totalExercises}</strong><small>dans cette matière</small></article>
      </section>

      <section class="section focus-band">
        <div>
          <span class="eyebrow">Continuer</span>
          <h2>${nextCourse.title}</h2>
          <p>${nextCourse.goal}</p>
        </div>
        <div class="button-row">
          <button class="primary" data-open-course="${nextCourse.id}" type="button">Lire le cours</button>
          ${nextCourse.exercises.length ? `<button class="secondary" data-start-course-exercises="${nextCourse.id}" type="button">Faire les exercices</button>` : ""}
        </div>
      </section>

      <section class="section annales-band">
        <div>
          <span class="eyebrow">Anciens sujets</span>
          <h2>S'entraîner avec les sujets du brevet</h2>
          <p>Tu pourras retrouver ici les anciens sujets liés à ${subject.label}, puis noter ton résultat pour suivre ta progression.</p>
        </div>
        <button class="secondary" data-view="annales" type="button">Voir les anciens sujets</button>
      </section>

      <section class="section">
        <div class="section-title">
          <h2>Thèmes</h2>
          <span>Choisis un thème pour voir ses cours et exercices.</span>
        </div>
        <div class="theme-grid">
          ${subject.themes.map((theme) => renderThemeCard(subject, theme)).join("")}
        </div>
      </section>

      <section class="section grid grid-2">
        <article class="panel">
          <h2>Derniers cours lus</h2>
          ${renderRecentCourseReads(subject.id)}
        </article>
        <article class="panel">
          <h2>Derniers exercices</h2>
          ${renderRecentAnswers(subject.id)}
        </article>
      </section>
    `;
  }

  function renderThemeCard(subject, theme) {
    const stats = getThemeProgress(subject.id, theme.id);
    const courseBadge = getBadge(stats.coursePercent, stats.readCourses > 0);
    const exerciseBadge = getBadge(stats.exerciseProgress, stats.totalAnswers > 0);
    return `
      <article class="theme-card">
        <div class="theme-icon image-medal ${courseBadge.className}">
          <img src="${getThemeBadgeAsset(courseBadge.className)}" alt="">
        </div>
        <h3>${theme.label}</h3>
        <p class="muted">${formatCourseCount(stats.totalCourses)} · ${formatExerciseCount(stats.totalExercises)}.</p>
        <div class="theme-progress">
          <span>Cours : ${stats.readCourses} / ${stats.totalCourses} · ${courseBadge.label}</span>
          <div class="progress-track"><span style="width:${stats.coursePercent}%"></span></div>
          <span>Exercices : ${stats.uniqueExercisesDone} / ${stats.totalExercises} · ${exerciseBadge.label}</span>
          <div class="progress-track exercise"><span style="width:${stats.exerciseProgress}%"></span></div>
        </div>
        <button class="secondary" data-open-theme="${theme.id}" type="button">Voir le thème</button>
      </article>
    `;
  }

  function renderThemeCourses() {
    const subject = getSubject(state.selectedSubjectId);
    const theme = getTheme(state.selectedSubjectId, state.selectedThemeId);
    const stats = getThemeProgress(subject.id, theme.id);
    const nextCourse = getNextCourseForSubject(subject.id);
    view.innerHTML = `
      <header class="page-heading">
        <span class="tag">${subject.label}</span>
        <span class="tag">${theme.label}</span>
        <h1>${theme.label}</h1>
        <p>${formatCourseCount(stats.totalCourses)}, ${formatExerciseCount(stats.totalExercises)}. Lis un cours, puis entraîne-toi sur les exercices qui lui sont liés.</p>
        <div class="button-row">
          ${nextCourse ? `<button class="primary" data-open-course="${nextCourse.id}" type="button">Continuer les cours</button>` : ""}
          <button class="secondary" data-open-subject="${subject.id}" type="button">Retour à la matière</button>
        </div>
      </header>
      ${renderBreadcrumb([
        ["Matières", "subjects"],
        [subject.label, "subject"],
        [theme.label, "theme"]
      ])}
      <section class="course-list section">
        ${theme.courses.map((courseItem) => renderCourseCard(subject, theme, courseItem)).join("")}
      </section>
    `;
  }

  function renderCourseCard(subject, theme, courseItem) {
    const read = isCourseRead(courseItem.id);
    return `
      <article class="course-card ${read ? "read" : ""}">
        <div>
          <span class="tag">${subject.label}</span>
          <span class="tag">${theme.label}</span>
          ${read ? `<span class="tag read-tag">Cours déjà lu</span>` : ""}
          <h3>${courseItem.title}</h3>
          <p>${courseItem.goal}</p>
          <p class="muted">${courseItem.exercises.length} exercice${courseItem.exercises.length > 1 ? "s" : ""} lié${courseItem.exercises.length > 1 ? "s" : ""} à ce cours.</p>
        </div>
        <div class="course-actions">
          <button class="${read ? "secondary" : "primary"}" data-open-course="${courseItem.id}" type="button">${read ? "Relire le cours" : "Lire le cours"}</button>
          ${courseItem.exercises.length
            ? `<button class="secondary" data-start-course-exercises="${courseItem.id}" type="button">Faire les exercices</button>`
            : `<button class="secondary" type="button" disabled>Exercices bientôt disponibles</button>`}
        </div>
      </article>
    `;
  }

  function renderCourseDetail(courseItem) {
    const path = getCoursePath(courseItem.id);
    const themeCourses = path.theme.courses;
    const currentIndex = themeCourses.findIndex((item) => item.id === courseItem.id);
    const previousCourse = currentIndex > 0 ? themeCourses[currentIndex - 1] : null;
    const nextCourse = currentIndex >= 0 && currentIndex < themeCourses.length - 1 ? themeCourses[currentIndex + 1] : null;
    const nextUnreadCourse = getNextUnreadCourseAfter(courseItem.id);
    const subjectCourses = flat.courses.filter((item) => item.subject.id === path.subject.id).map((item) => item.course);
    const subjectCourseIndex = subjectCourses.findIndex((item) => item.id === courseItem.id);
    const subjectCourseLabel = `Cours ${subjectCourseIndex + 1} / ${subjectCourses.length} en ${path.subject.label}`;
    const read = isCourseRead(courseItem.id);
    view.innerHTML = `
      <article class="course-page">
        ${renderBreadcrumb([
          ["Matières", "subjects"],
          [path.subject.label, "subject"],
          [path.theme.label, "theme"],
          [courseItem.title, "course"]
        ])}
        <div class="course-titlebar">
          <div>
            <span class="tag">${path.subject.label}</span>
            <span class="tag">${path.theme.label}</span>
            <span class="tag">${subjectCourseLabel}</span>
            <h1>${courseItem.title}</h1>
            <p>${courseItem.goal}</p>
          </div>
          <label class="course-jump">Changer de cours
            <select id="courseJump">
              ${path.theme.courses.map((item) => `<option value="${item.id}" ${item.id === courseItem.id ? "selected" : ""}>${item.title}</option>`).join("")}
            </select>
          </label>
        </div>
        ${renderLessonBody(courseItem)}
        <div class="button-row">
          ${courseItem.exercises.length
            ? `<button class="primary" data-start-course-exercises="${courseItem.id}" type="button">Faire les exercices liés</button>`
            : `<button class="secondary" type="button" disabled>Exercices bientôt disponibles</button>`}
          <button class="read-confirm" data-mark-read="${courseItem.id}" type="button">${read ? "Cours déjà validé" : "J'ai lu et compris"}</button>
          ${nextUnreadCourse ? `<button class="secondary" data-open-course="${nextUnreadCourse.id}" type="button">Cours suivant</button>` : ""}
          <button class="secondary" data-open-theme="${path.theme.id}" type="button">Voir les cours du thème</button>
        </div>
        <div class="course-nav">
          ${previousCourse ? `<button class="secondary" data-open-course="${previousCourse.id}" type="button">Cours précédent</button>` : `<span></span>`}
          ${nextCourse ? `<button class="secondary" data-open-course="${nextCourse.id}" type="button">Cours suivant</button>` : `<span></span>`}
        </div>
      </article>
    `;
  }

  function renderLessonBody(courseItem) {
    if (courseItem.lesson) {
      const lesson = courseItem.lesson;
      return `
        <div class="lesson-body rich-lesson">
          ${renderLessonSection("Avant de commencer", lesson.prerequisites)}
          ${renderLessonSection("L'idée principale", lesson.understand)}
          ${renderLessonWords(lesson.words)}
          ${renderLessonSection("Méthode pas à pas", lesson.method, "ordered")}
          ${renderLessonExample(lesson.example)}
          ${renderLessonSection("Pièges à éviter", lesson.traps)}
          ${renderLessonSection("À retenir", lesson.remember)}
        </div>
      `;
    }
    return `
      <div class="lesson-body">
        <div class="lesson-block main-idea">
          <h4>Ce qu’il faut comprendre</h4>
          <ul>${courseItem.keyIdeas.map((idea) => `<li>${idea}</li>`).join("")}</ul>
        </div>
        <div class="lesson-block example-block">
          <h4>Exemple simple</h4>
          <p>${courseItem.example}</p>
        </div>
      </div>
    `;
  }

  function renderLessonSection(title, items, mode = "unordered") {
    if (!items || !items.length) return "";
    const tag = mode === "ordered" ? "ol" : "ul";
    return `
      <div class="lesson-block">
        <h4>${title}</h4>
        <${tag}>${items.map((item) => `<li>${item}</li>`).join("")}</${tag}>
      </div>
    `;
  }

  function renderLessonWords(words) {
    if (!words || !words.length) return "";
    return `
      <div class="lesson-block lesson-words">
        <h4>Mots à connaître</h4>
        <div>${words.map((word) => `<span>${word}</span>`).join("")}</div>
      </div>
    `;
  }

  function renderLessonExample(example) {
    if (!example) return "";
    const content = /<\w+/i.test(example) ? example : `<p>${example}</p>`;
    return `
      <div class="lesson-block example-block">
        <h4>Exemple guidé</h4>
        ${content}
      </div>
    `;
  }

  function renderPractice() {
    const courseItem = getCourse(state.selectedCourseId);
    if (!courseItem.exercises.length) {
      renderNoExerciseCourse(courseItem);
      return;
    }
    const exercise = courseItem.exercises[state.exerciseIndex] || courseItem.exercises[0];
    const path = getCoursePath(courseItem.id);
    view.innerHTML = `
      <header class="page-heading">
        <span class="tag">${path.subject.label}</span>
        <span class="tag">${path.theme.label}</span>
        <span class="tag">${courseItem.title}</span>
        <h1>Exercice lié au cours</h1>
        <p>Question ${state.exerciseIndex + 1} / ${courseItem.exercises.length}. Si tu bloques, l’aide explique cette question précisément.</p>
      </header>
      <section class="question-card">
        <h2>${exercise.prompt}</h2>
        ${renderExerciseInput(exercise)}
        <div class="button-row">
          <button class="secondary" data-open-course="${courseItem.id}" type="button">Voir le cours</button>
          <button class="secondary" data-help="1" type="button">Je ne comprends pas</button>
        </div>
        ${renderExerciseHelp(exercise)}
        <div id="exerciseFeedback" class="feedback" hidden></div>
      </section>
    `;
  }

  function renderNoExerciseCourse(courseItem) {
    const path = getCoursePath(courseItem.id);
    view.innerHTML = `
      <header class="page-heading">
        <span class="tag">${path.subject.label}</span>
        <span class="tag">${path.theme.label}</span>
        <h1>Exercices bientôt disponibles</h1>
        <p>Tu peux déjà lire le cours. Les exercices liés seront ajoutés progressivement.</p>
      </header>
      <section class="question-card">
        <h2>${courseItem.title}</h2>
        <p>${courseItem.goal}</p>
        <div class="button-row">
          <button class="primary" data-open-course="${courseItem.id}" type="button">Lire le cours</button>
          <button class="secondary" data-open-theme="${path.theme.id}" type="button">Voir les cours du thème</button>
        </div>
      </section>
    `;
  }

  function renderBreadcrumb(items) {
    return `
      <nav class="breadcrumb" aria-label="Navigation rapide">
        ${items.map(([label, viewName], index) => {
          const isLast = index === items.length - 1;
          if (isLast) return `<span>${label}</span>`;
          if (viewName === "subjects") return `<button data-view="subjects" type="button">${label}</button>`;
          if (viewName === "subject") return `<button data-open-subject="${state.selectedSubjectId}" type="button">${label}</button>`;
          if (viewName === "theme") return `<button data-open-theme="${state.selectedThemeId}" type="button">${label}</button>`;
          return `<span>${label}</span>`;
        }).join("<span>/</span>")}
      </nav>
    `;
  }

  function renderExerciseInput(exercise) {
    if (exercise.type === "short_answer") {
      return `
        <label>
          Ta réponse
          <input id="shortAnswerInput" type="text" autocomplete="off" placeholder="Écris ta réponse">
        </label>
        <div class="button-row">
          <button class="primary" data-check-short-answer="1" type="button">Valider</button>
        </div>
      `;
    }
    return `
      <div>
        ${exercise.choices.map((choice) => `<button class="choice" data-answer="${escapeHtml(choice)}" type="button">${escapeHtml(choice)}</button>`).join("")}
      </div>
    `;
  }

  function renderProgress() {
    const global = getGlobalProgress();
    view.innerHTML = `
      <header class="page-heading">
        <span class="tag">Progression</span>
        <h1>Où tu en es</h1>
        <p>Un résumé lisible de ce qui est lu, réussi et encore à reprendre.</p>
      </header>
      <section class="stat-grid section">
        <article class="stat-card"><span>Progression</span><strong>${global.globalPercent} %</strong><small>sur toute l’application</small></article>
        <article class="stat-card"><span>Cours lus</span><strong>${global.readCourses} / ${global.totalCourses}</strong><small>validés</small></article>
        <article class="stat-card"><span>Exercices faits</span><strong>${global.uniqueExercisesDone} / ${global.totalExercises}</strong><small>${formatAnswerCount(global.totalAnswers)} enregistrée${global.totalAnswers > 1 ? "s" : ""}</small></article>
        <article class="stat-card"><span>Réussite</span><strong>${global.successRate} %</strong><small>sur les réponses données</small></article>
        <article class="stat-card"><span>À reprendre</span><strong>${global.pendingErrors}</strong><small>erreurs à corriger</small></article>
      </section>
      <section class="section panel">
        <h2>Détail par matière</h2>
        <div class="progress-list">
          ${catalog.subjects.map((subject) => {
            const stats = getSubjectProgress(subject.id);
            return `
              <div class="progress-line">
                <strong>${subject.label}</strong>
                <span>Cours ${stats.readCourses}/${stats.totalCourses}</span>
                <div class="progress-track"><span style="width:${stats.coursePercent}%"></span></div>
                <span>Exercices ${stats.uniqueExercisesDone}/${stats.totalExercises}</span>
                <div class="progress-track exercise"><span style="width:${stats.exerciseProgress}%"></span></div>
              </div>
            `;
          }).join("")}
        </div>
      </section>
      ${renderPendingErrors()}
    `;
  }

  function renderPendingErrors() {
    const pending = getPendingErrorItems().slice(0, 8);
    return `
      <section class="section panel pending-panel">
        <div class="section-title">
          <h2>Erreurs à reprendre</h2>
          <span>${pending.length ? "Relis l'aide, puis refais les exercices du cours." : "Aucune erreur en attente."}</span>
        </div>
        ${pending.length
          ? `<div class="pending-list">${pending.map((item) => {
              const path = getCoursePath(item.courseId);
              return `
                <article class="pending-item">
                  <div>
                    <strong>${path.subject.label} · ${path.course.title}</strong>
                    <span>${path.theme.label} · dernier essai le ${formatDate(item.date)}</span>
                  </div>
                  <button class="secondary" data-start-course-exercises="${item.courseId}" type="button">Reprendre</button>
                </article>
              `;
            }).join("")}</div>`
          : `<p class="muted">Quand une question est ratée, elle apparaîtra ici jusqu'à ce qu'elle soit réussie.</p>`}
      </section>
    `;
  }

  function renderAnnales() {
    const subject = getSubject(state.selectedSubjectId);
    view.innerHTML = `
      <header class="page-heading">
        <span class="tag">${subject.label}</span>
        <span class="tag">Anciens sujets</span>
        <h1>Anciens sujets de ${subject.label}</h1>
        <p>Cette page servira à retrouver les sujets du brevet associés à la matière, puis à enregistrer une note ou un bilan.</p>
      </header>
      <section class="panel section">
        <h2>Préparation aux anciens sujets</h2>
        <p>Cette zone servira à travailler les sujets du brevet matière par matière, avec une note ou un bilan à enregistrer.</p>
        <p class="muted">Objectif : ouvrir un sujet, refaire l’épreuve, puis enregistrer le résultat dans la progression.</p>
        <div class="button-row">
          <button class="primary" data-open-subject="${subject.id}" type="button">Retour à la matière</button>
        </div>
      </section>
    `;
  }

  function renderBadges() {
    const subject = getSubject(state.selectedSubjectId);
    const global = getGlobalProgress();
    const subjectProgress = getSubjectProgress(subject.id);
    const subjectBadges = getSubjectBadgeDefinitions(subject);
    view.innerHTML = `
      <header class="page-heading badge-heading">
        <span class="tag">Badges</span>
        <h1>Badges et récompenses</h1>
        <p>Les badges montrent ce que tu as déjà construit. Les premiers arrivent vite, les suivants demandent plus de régularité.</p>
      </header>

      <section class="badge-switch section">
        ${catalog.subjects.map((item) => `
          <button class="${item.id === subject.id ? "active" : ""}" data-open-badges="${item.id}" type="button">${item.label}</button>
        `).join("")}
      </section>

      <section class="section">
        <div class="section-title">
          <h2>Badges généraux</h2>
          <span>${global.readCourses} / ${global.totalCourses} cours lus · ${global.uniqueExercisesDone} / ${global.totalExercises} exercices faits</span>
        </div>
        <div class="badge-gallery">
          ${getGeneralBadgeDefinitions(global).map(renderBadgeCard).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <h2>Badges ${subject.label}</h2>
          <span>${subjectProgress.readCourses} / ${subjectProgress.totalCourses} cours lus · ${subjectProgress.uniqueExercisesDone} / ${subjectProgress.totalExercises} exercices faits</span>
        </div>
        <div class="badge-gallery">
          ${subjectBadges.map(renderBadgeCard).join("")}
        </div>
      </section>
    `;
  }

  function renderBadgeCard(badge) {
    const stateClass = badge.unlocked ? badge.tier : "locked";
    const actionAttr = badge.actionSubject ? `data-open-subject="${badge.actionSubject}"` : `data-view="${badge.actionView}"`;
    return `
      <article class="badge-card ${stateClass}">
        <div class="badge-art ${stateClass}">
          <img src="${badge.image}" alt="">
        </div>
        <span class="badge-count">${badge.progressText}</span>
        <span class="badge-pill">${badge.unlocked ? badge.label : "Verrouillé"}</span>
        <strong>${badge.title}</strong>
        <small>${badge.text}</small>
        <em>${badge.unlocked ? "Débloqué" : badge.requirement}</em>
        <span class="badge-next">${badge.nextText}</span>
        <button class="badge-action" ${actionAttr} type="button">${badge.actionText}</button>
      </article>
    `;
  }

  function renderSettings() {
    view.innerHTML = `
      <header class="page-heading">
        <span class="tag">Paramètres</span>
        <h1>Réglages</h1>
        <p>Les réglages servent à adapter l'affichage et à rappeler comment les données sont enregistrées.</p>
      </header>
      <section class="settings-layout section">
        <article class="panel">
          <h2>Version</h2>
          <p><strong>Version 2</strong></p>
          <p class="muted">Les cours, thèmes et exercices sont rangés pour réviser plus simplement.</p>
        </article>
        <article class="panel">
          <h2>Données</h2>
          <p>Tes cours validés et tes réponses restent enregistrées sur cet appareil.</p>
          <p class="muted">Aucune information n’est envoyée à un serveur dans cette version.</p>
        </article>
        <article class="panel">
          <h2>Thème</h2>
          <label>Mode d'affichage
            <select id="themeMode">
              <option value="dark" ${settings.theme === "dark" ? "selected" : ""}>Sombre</option>
              <option value="light" ${settings.theme === "light" ? "selected" : ""}>Clair</option>
            </select>
          </label>
          <p class="muted">Le thème sombre est utilisé par défaut.</p>
        </article>
      </section>
    `;
  }

  function renderContact() {
    view.innerHTML = `
      <header class="page-heading">
        <span class="tag">Contact</span>
        <h1>Donner un avis ou signaler un bug</h1>
        <p>Les retours des élèves aideront à rendre l’application plus claire.</p>
      </header>
      <section class="contact-panel section">
        <div>
          <h2>Tu peux envoyer un message</h2>
          <p>Explique ce qui n’est pas clair, ce qui ne fonctionne pas, ou ce qui pourrait être amélioré.</p>
          <p class="muted">Adresse : parraga.antoine@gmail.com</p>
        </div>
        <button class="primary big-action" data-mail="1" type="button">Envoyer un mail</button>
      </section>
    `;
  }

  function answerQcm(answer) {
    const exercise = getCurrentExercise();
    const correct = String(answer) === String(exercise.answer);
    recordAnswer(exercise, correct);
    document.querySelectorAll(".choice").forEach((button) => {
      const isAnswer = button.dataset.answer === answer;
      const isCorrect = button.dataset.answer === exercise.answer;
      button.classList.toggle("correct", isCorrect);
      button.classList.toggle("wrong", isAnswer && !correct);
      button.disabled = true;
    });
    showFeedback(correct, exercise);
  }

  function answerShort() {
    const exercise = getCurrentExercise();
    const input = document.getElementById("shortAnswerInput");
    const value = input.value.trim();
    const accepted = exercise.acceptedAnswers || [exercise.answer];
    const correct = accepted.some((answer) => normalizeAnswer(answer) === normalizeAnswer(value));
    recordAnswer(exercise, correct);
    input.disabled = true;
    document.querySelector("[data-check-short-answer]").disabled = true;
    showFeedback(correct, exercise);
  }

  function showFeedback(correct, exercise) {
    const box = document.getElementById("exerciseFeedback");
    const courseItem = getCourse(state.selectedCourseId);
    const isLast = state.exerciseIndex >= courseItem.exercises.length - 1;
    box.hidden = false;
    box.className = `feedback ${correct ? "good" : "bad"}`;
    box.innerHTML = `
      <strong>${correct ? "Bonne réponse." : "Pas encore."}</strong>
      <p>${exercise.explanation}</p>
      <button class="primary" data-next-exercise="1" type="button">${isLast ? "Voir le bilan" : "Question suivante"}</button>
    `;
  }

  function showExerciseHelp() {
    const box = document.getElementById("exerciseHelp");
    if (!box) return;
    box.hidden = !box.hidden;
  }

  function renderExerciseHelp(exercise) {
    const steps = Array.isArray(exercise.helpSteps) && exercise.helpSteps.length ? exercise.helpSteps : [exercise.helpText];
    return `
      <div id="exerciseHelp" class="feedback help-panel" hidden>
        <strong>Aide pour cet exercice</strong>
        <p class="muted">${exercise.prompt}</p>
        <ol>${steps.map((step) => `<li>${step}</li>`).join("")}</ol>
      </div>
    `;
  }

  function nextExercise() {
    const courseItem = getCourse(state.selectedCourseId);
    if (state.exerciseIndex >= courseItem.exercises.length - 1) {
      renderCourseExerciseSummary(courseItem);
      return;
    }
    state.exerciseIndex = (state.exerciseIndex + 1) % courseItem.exercises.length;
    renderPractice();
  }

  function renderCourseExerciseSummary(courseItem) {
    const path = getCoursePath(courseItem.id);
    const exerciseIds = new Set(courseItem.exercises.map((exercise) => exercise.id));
    const courseAnswers = progress.answers.filter((answer) => exerciseIds.has(answer.id));
    const latestByExercise = new Map();
    courseAnswers.forEach((answer) => latestByExercise.set(answer.id, answer));
    const correct = [...latestByExercise.values()].filter((answer) => answer.correct).length;
    const done = latestByExercise.size;
    const errors = [...latestByExercise.values()].filter((answer) => !answer.correct).length;
    view.innerHTML = `
      <header class="page-heading">
        <span class="tag">${path.subject.label}</span>
        <span class="tag">${path.theme.label}</span>
        <span class="tag">${courseItem.title}</span>
        <h1>Bilan des exercices</h1>
        <p>${done} exercice${done > 1 ? "s" : ""} fait${done > 1 ? "s" : ""} sur ${courseItem.exercises.length}. ${errors ? `${errors} erreur${errors > 1 ? "s" : ""} à reprendre.` : "Aucune erreur sur cette série."}</p>
      </header>
      <section class="stat-grid section">
        <article class="stat-card"><span>Exercices faits</span><strong>${done} / ${courseItem.exercises.length}</strong><small>dans ce cours</small></article>
        <article class="stat-card"><span>Bonnes réponses</span><strong>${correct} / ${done || 0}</strong><small>dernière réponse par exercice</small></article>
        <article class="stat-card"><span>À reprendre</span><strong>${errors}</strong><small>${errors ? "relis l'aide puis recommence" : "rien à reprendre"}</small></article>
      </section>
      <section class="question-card">
        <div class="button-row">
          <button class="primary" data-open-course="${courseItem.id}" type="button">Relire le cours</button>
          <button class="secondary" data-start-course-exercises="${courseItem.id}" type="button">Refaire les exercices</button>
          <button class="secondary" data-open-theme="${path.theme.id}" type="button">Voir les cours du thème</button>
        </div>
      </section>
    `;
  }

  function openSubject(subjectId) {
    state.selectedSubjectId = subjectId;
    const subject = getSubject(subjectId);
    state.selectedThemeId = subject.themes[0].id;
    state.selectedCourseId = subject.themes[0].courses[0].id;
    showView("subject");
  }

  function openTheme(themeId) {
    state.selectedThemeId = themeId;
    const theme = getTheme(state.selectedSubjectId, themeId);
    state.selectedCourseId = theme.courses[0].id;
    showView("theme");
  }

  function openCourse(courseId) {
    state.selectedCourseId = courseId;
    syncSelectionFromCourse();
    showView("course");
  }

  function getNextCourseForSubject(subjectId) {
    const subjectCourses = flat.courses.filter((item) => item.subject.id === subjectId).map((item) => item.course);
    return subjectCourses.find((course) => !isCourseRead(course.id) && course.status !== "structure") ||
      subjectCourses.find((course) => course.exercises.length) ||
      subjectCourses[0];
  }

  function getNextUnreadCourseAfter(courseId) {
    const path = getCoursePath(courseId);
    const subjectCourses = flat.courses
      .filter((item) => item.subject.id === path.subject.id)
      .map((item) => item.course);
    const currentIndex = subjectCourses.findIndex((course) => course.id === courseId);
    const remainingCourses = subjectCourses.slice(currentIndex + 1);
    return remainingCourses.find((course) => !isCourseRead(course.id) && course.status !== "structure") ||
      subjectCourses.find((course) => course.id !== courseId && !isCourseRead(course.id) && course.status !== "structure") ||
      null;
  }

  function renderRecentCourseReads(subjectId) {
    const items = progress.courseReads
      .filter((item) => item.subjectId === subjectId)
      .slice(-4)
      .reverse();
    if (!items.length) return `<p class="muted">Aucun cours validé pour le moment.</p>`;
    return `<div class="mini-list">${items.map((item) => {
      const path = getCoursePath(item.courseId);
      return `<button data-open-course="${item.courseId}" type="button">${path.course.title}<span>${formatDate(item.date)}</span></button>`;
    }).join("")}</div>`;
  }

  function renderRecentAnswers(subjectId) {
    const items = progress.answers
      .filter((item) => item.subjectId === subjectId)
      .slice(-4)
      .reverse();
    if (!items.length) return `<p class="muted">Aucun exercice fait pour le moment.</p>`;
    return `<div class="mini-list">${items.map((item) => {
      const path = getCoursePath(item.courseId);
      return `<button data-start-course-exercises="${item.courseId}" type="button">${path.course.title}<span>${item.correct ? "Réussi" : "À revoir"}</span></button>`;
    }).join("")}</div>`;
  }

  function getCurrentExercise() {
    const courseItem = getCourse(state.selectedCourseId);
    return courseItem.exercises[state.exerciseIndex] || courseItem.exercises[0];
  }

  function recordAnswer(exercise, correct) {
    const path = getCoursePath(exercise.courseId);
    progress.answers.push({
      id: exercise.id,
      courseId: exercise.courseId,
      subjectId: path.subject.id,
      themeId: path.theme.id,
      correct,
      date: new Date().toISOString()
    });
    saveProgress();
  }

  function markCourseRead(courseId) {
    if (!isCourseRead(courseId)) {
      const path = getCoursePath(courseId);
      progress.courseReads.push({
        courseId,
        subjectId: path.subject.id,
        themeId: path.theme.id,
        date: new Date().toISOString()
      });
      saveProgress();
    }
  }

  function isCourseRead(courseId) {
    return progress.courseReads.some((item) => item.courseId === courseId);
  }

  function getGlobalProgress() {
    const totals = getCatalogTotals();
    const readCourses = progress.courseReads.length;
    const totalAnswers = progress.answers.length;
    const correctAnswers = progress.answers.filter((answer) => answer.correct).length;
    const uniqueExercisesDone = countUnique(progress.answers.map((answer) => answer.id));
    const successRate = totalAnswers ? Math.round((correctAnswers / totalAnswers) * 100) : 0;
    const pendingErrors = getPendingErrorItems().length;
    const coursePart = totals.courses ? (readCourses / totals.courses) * 60 : 0;
    const exercisePart = totals.exercises ? Math.min(uniqueExercisesDone / Math.max(totals.exercises, 1), 1) * 40 : 0;
    return {
      ...totals,
      readCourses,
      totalAnswers,
      uniqueExercisesDone,
      correctAnswers,
      successRate,
      pendingErrors,
      globalPercent: Math.round(coursePart + exercisePart)
    };
  }

  function getSubjectProgress(subjectId) {
    const subjectCourses = flat.courses.filter((item) => item.subject.id === subjectId);
    const subjectAnswers = progress.answers.filter((answer) => answer.subjectId === subjectId);
    const correct = subjectAnswers.filter((answer) => answer.correct).length;
    const read = subjectCourses.filter((item) => isCourseRead(item.course.id)).length;
    const totalExercises = subjectCourses.reduce((sum, item) => sum + item.course.exercises.length, 0);
    const uniqueExercisesDone = countUnique(subjectAnswers.map((answer) => answer.id));
    const coursePercent = subjectCourses.length ? Math.round((read / subjectCourses.length) * 100) : 0;
    const successRate = subjectAnswers.length ? Math.round((correct / subjectAnswers.length) * 100) : 0;
    const exerciseProgress = totalExercises ? Math.round(Math.min(uniqueExercisesDone / totalExercises, 1) * 100) : 0;
    const score = Math.round((coursePercent * 0.55) + (exerciseProgress * 0.45));
    return {
      totalCourses: subjectCourses.length,
      readCourses: read,
      coursePercent,
      totalExercises,
      totalAnswers: subjectAnswers.length,
      uniqueExercisesDone,
      exerciseProgress,
      successRate,
      pendingErrors: getPendingErrorItems(subjectId).length,
      score,
      hasActivity: read > 0 || subjectAnswers.length > 0
    };
  }

  function getPendingErrorItems(subjectId = null) {
    const latestByExercise = new Map();
    progress.answers.forEach((answer) => {
      if (subjectId && answer.subjectId !== subjectId) return;
      latestByExercise.set(answer.id, answer);
    });
    return Array.from(latestByExercise.values())
      .filter((answer) => !answer.correct)
      .sort((left, right) => new Date(right.date) - new Date(left.date));
  }

  function getThemeProgress(subjectId, themeId) {
    const courses = flat.courses.filter((item) => item.subject.id === subjectId && item.theme.id === themeId);
    const answers = progress.answers.filter((answer) => answer.subjectId === subjectId && answer.themeId === themeId);
    const read = courses.filter((item) => isCourseRead(item.course.id)).length;
    const totalExercises = courses.reduce((sum, item) => sum + item.course.exercises.length, 0);
    const uniqueExercisesDone = countUnique(answers.map((answer) => answer.id));
    const coursePercent = courses.length ? Math.round((read / courses.length) * 100) : 0;
    const exerciseProgress = totalExercises ? Math.round(Math.min(uniqueExercisesDone / totalExercises, 1) * 100) : 0;
    return {
      totalCourses: courses.length,
      readCourses: read,
      totalExercises,
      totalAnswers: answers.length,
      uniqueExercisesDone,
      coursePercent,
      exerciseProgress,
      score: Math.round((coursePercent * 0.5) + (exerciseProgress * 0.5)),
      hasActivity: read > 0 || answers.length > 0
    };
  }

  function countUnique(values) {
    return new Set(values).size;
  }

  function formatCourseCount(count) {
    return `${count} cours`;
  }

  function formatReadCourseCount(count) {
    return `${count} cours lu${count === 1 ? "" : "s"}`;
  }

  function formatExerciseCount(count) {
    return `${count} exercice${count > 1 ? "s" : ""}`;
  }

  function formatDoneExerciseCount(count) {
    return `${count} exercice${count > 1 ? "s" : ""} fait${count > 1 ? "s" : ""}`;
  }

  function formatAnswerCount(count) {
    return `${count} réponse${count > 1 ? "s" : ""}`;
  }

  function getBadge(score, hasActivity) {
    if (!hasActivity) return { label: "À gagner", short: "🔒", className: "locked" };
    if (score >= 80) return { label: "Or", short: "Or", className: "gold" };
    if (score >= 45) return { label: "Argent", short: "Ag", className: "silver" };
    return { label: "Bronze", short: "Br", className: "bronze" };
  }

  function getGeneralBadgeDefinitions(stats) {
    const workedSubjects = catalog.subjects.filter((subject) => getSubjectProgress(subject.id).hasActivity).length;
    return [
      badgeDefinition({
        title: "Premier pas",
        text: "Lire un premier cours.",
        imageBase: "guided",
        tier: "bronze",
        value: stats.readCourses,
        target: 1,
        requirement: "1 cours",
        nextText: "Argent : 10 cours lus · Or : 30 cours lus",
        actionView: "subjects",
        actionText: "Lire un cours"
      }),
      badgeDefinition({
        title: "Cap des 10",
        text: "Répondre à 10 questions.",
        imageBase: "questions",
        tier: "bronze",
        value: stats.totalAnswers,
        target: 10,
        requirement: "10 questions",
        nextText: "Argent : 50 réponses · Or : 150 réponses",
        actionView: "subjects",
        actionText: "Faire des exercices"
      }),
      badgeDefinition({
        title: "Tour d'horizon",
        text: "Travailler les quatre matières.",
        imageBase: "ultimate",
        tier: "silver",
        value: workedSubjects,
        target: 4,
        requirement: "4 matières",
        nextText: "Argent : 4 matières travaillées · Or : 4 matières solides",
        actionView: "subjects",
        actionText: "Choisir une matière"
      }),
      badgeDefinition({
        title: "Solide",
        text: "Atteindre 80 % de réussite après au moins 20 réponses.",
        imageBase: "perfect",
        tier: "gold",
        value: stats.totalAnswers >= 20 ? stats.successRate : 0,
        target: 80,
        requirement: "80 % de réussite",
        nextText: "Bronze : 60 % · Argent : 75 % · Or : 80 %",
        actionView: "subjects",
        actionText: "Continuer"
      })
    ];
  }

  function getSubjectBadgeDefinitions(subject) {
    const stats = getSubjectProgress(subject.id);
    const courseBronze = stats.totalCourses ? 1 : 0;
    const courseSilver = Math.max(courseBronze + 1, Math.ceil(stats.totalCourses * 0.6));
    const courseGold = Math.max(courseSilver, stats.totalCourses);
    const exerciseBronze = stats.totalExercises ? 1 : 0;
    const exerciseSilver = Math.max(exerciseBronze + 1, Math.ceil(stats.totalExercises * 0.6));
    const exerciseGold = Math.max(exerciseSilver, stats.totalExercises);
    return [
      badgeDefinition({
        title: `${subject.label} - cours bronze`,
        text: `Lire les premiers cours de ${subject.label}.`,
        imageBase: getSubjectBadgeBase(subject.id),
        tier: "bronze",
        value: stats.readCourses,
        target: courseBronze,
        requirement: `Objectif : ${formatReadCourseCount(courseBronze)}`,
        nextText: `Argent : ${formatReadCourseCount(courseSilver)} · Or : ${formatReadCourseCount(courseGold)}`,
        actionView: "subjects",
        actionSubject: subject.id,
        actionText: "Lire un cours"
      }),
      badgeDefinition({
        title: `${subject.label} - cours argent`,
        text: `Avancer dans les cours de ${subject.label}.`,
        imageBase: getSubjectBadgeBase(subject.id),
        tier: "silver",
        value: stats.readCourses,
        target: courseSilver,
        requirement: `Objectif : ${formatReadCourseCount(courseSilver)}`,
        nextText: `Or : ${formatReadCourseCount(courseGold)}`,
        actionView: "subjects",
        actionSubject: subject.id,
        actionText: "Lire un cours"
      }),
      badgeDefinition({
        title: `${subject.label} - cours or`,
        text: `Lire tous les cours de ${subject.label}.`,
        imageBase: getSubjectBadgeBase(subject.id),
        tier: "gold",
        value: stats.readCourses,
        target: courseGold,
        requirement: `Objectif : ${formatReadCourseCount(courseGold)}`,
        nextText: "Or : lire tous les cours de cette matière",
        actionView: "subjects",
        actionSubject: subject.id,
        actionText: "Relire les cours"
      }),
      badgeDefinition({
        title: `${subject.label} - exercices bronze`,
        text: `Faire les premiers exercices de ${subject.label}.`,
        imageBase: "questions",
        tier: "bronze",
        value: stats.uniqueExercisesDone,
        target: exerciseBronze,
        requirement: `Objectif : ${formatDoneExerciseCount(exerciseBronze)}`,
        nextText: `Argent : ${formatDoneExerciseCount(exerciseSilver)} · Or : ${formatDoneExerciseCount(exerciseGold)}`,
        actionView: "subjects",
        actionSubject: subject.id,
        actionText: "Faire des exercices"
      }),
      badgeDefinition({
        title: `${subject.label} - exercices argent`,
        text: `S'entraîner régulièrement en ${subject.label}.`,
        imageBase: "questions",
        tier: "silver",
        value: stats.uniqueExercisesDone,
        target: exerciseSilver,
        requirement: `Objectif : ${formatDoneExerciseCount(exerciseSilver)}`,
        nextText: `Or : ${formatDoneExerciseCount(exerciseGold)}`,
        actionView: "subjects",
        actionSubject: subject.id,
        actionText: "Faire des exercices"
      }),
      badgeDefinition({
        title: `${subject.label} - exercices or`,
        text: `Faire tous les exercices classés en ${subject.label}.`,
        imageBase: "questions",
        tier: "gold",
        value: stats.uniqueExercisesDone,
        target: exerciseGold,
        requirement: `Objectif : ${formatDoneExerciseCount(exerciseGold)}`,
        nextText: "Or : faire tous les exercices de cette matière",
        actionView: "subjects",
        actionSubject: subject.id,
        actionText: "Faire des exercices"
      })
    ];
  }

  function badgeDefinition({ title, text, imageBase, tier, value, target, requirement, nextText, actionView, actionText, actionSubject = "" }) {
    const safeTarget = Math.max(target, 1);
    const progressValue = Math.min(value, safeTarget);
    return {
      title,
      text,
      tier,
      value,
      target: safeTarget,
      unlocked: value >= safeTarget,
      label: tier === "gold" ? "Or" : tier === "silver" ? "Argent" : "Bronze",
      progressText: `${progressValue} / ${safeTarget}`,
      image: `assets/badges/badge-${imageBase}-${value >= safeTarget ? tier : "locked"}.webp`,
      requirement,
      nextText,
      actionView,
      actionText,
      actionSubject
    };
  }

  function getSubjectBadgeBase(subjectId) {
    const map = {
      mathematiques: "subject-math",
      francais: "subject-french",
      "histoire-geo-emc": "subject-history",
      sciences: "subject-science"
    };
    return map[subjectId] || "chapter";
  }

  function getSubjectBadgeAsset(subjectId, tier) {
    const normalizedTier = ["bronze", "silver", "gold"].includes(tier) ? tier : "locked";
    return `assets/badges/badge-${getSubjectBadgeBase(subjectId)}-${normalizedTier}.webp`;
  }

  function getThemeBadgeAsset(tier) {
    const normalizedTier = ["bronze", "silver", "gold"].includes(tier) ? tier : "locked";
    return `assets/badges/badge-chapter-${normalizedTier}.webp`;
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || { courseReads: [], answers: [] };
    } catch {
      return { courseReads: [], answers: [] };
    }
  }

  function saveProgress() {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  }

  function loadSettings() {
    try {
      return { theme: "dark", ...(JSON.parse(localStorage.getItem(settingsKey)) || {}) };
    } catch {
      return { theme: "dark" };
    }
  }

  function saveSettings() {
    localStorage.setItem(settingsKey, JSON.stringify(settings));
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme === "light" ? "light" : "dark";
  }

  function buildFlatIndex() {
    const courses = [];
    catalog.subjects.forEach((subject) => {
      subject.themes.forEach((theme) => {
        theme.courses.forEach((course) => courses.push({ subject, theme, course }));
      });
    });
    return { courses };
  }

  function getSubject(id) {
    return catalog.subjects.find((subject) => subject.id === id) || catalog.subjects[0];
  }

  function getTheme(subjectId, themeId) {
    const subject = getSubject(subjectId);
    return subject.themes.find((theme) => theme.id === themeId) || subject.themes[0];
  }

  function getCourse(id) {
    return flat.courses.find((item) => item.course.id === id)?.course || flat.courses[0].course;
  }

  function getCoursePath(courseId) {
    return flat.courses.find((item) => item.course.id === courseId) || flat.courses[0];
  }

  function syncSelectionFromCourse() {
    const path = getCoursePath(state.selectedCourseId);
    state.selectedSubjectId = path.subject.id;
    state.selectedThemeId = path.theme.id;
  }

  function countCourses(subject) {
    return subject.themes.reduce((sum, theme) => sum + theme.courses.length, 0);
  }

  function countExercises(subject) {
    return subject.themes.reduce((sum, theme) => sum + theme.courses.reduce((total, course) => total + course.exercises.length, 0), 0);
  }

  function getCatalogTotals() {
    const totals = catalog.subjects.reduce((result, subject) => {
      subject.themes.forEach((theme) => {
        theme.courses.forEach((course) => {
          result.totalCourses += 1;
          result.totalExercises += course.exercises.length;
          if (course.status === "structure") result.inProgress += 1;
        });
      });
      return result;
    }, { totalCourses: 0, totalExercises: 0, inProgress: 0 });
    totals.courses = totals.totalCourses;
    totals.exercises = totals.totalExercises;
    return totals;
  }

  function normalizeAnswer(value) {
    return String(value)
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(",", ".")
      .replace(/^x\s*=\s*/, "x = ");
  }

  function formatDate(value) {
    return new Date(value).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" });
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }
})();
