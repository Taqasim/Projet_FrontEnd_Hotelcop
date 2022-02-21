// Déclaration des variables

let i;
// navigation
let btnNavptt = document.getElementById("bouton_navptt");
let cNavptt = document.getElementById("corps_navptt");
let fNavptt = document.getElementById("ferme_navptt");
// switch boutons/contenus
let tabBtnInact = [];
let tabContInact = [];
// post d'avis
let completAvis = false;
let divAvis;
let couleurAvis;
let nomAvis = document.getElementById("nom_avis");
let durAvis = document.getElementById("duree_avis");
let tPos = document.getElementById("tpos");
let pos = document.getElementById("pos");
let pass = document.getElementById("pass");
let neg = document.getElementById("neg");
let tNeg = document.getElementById("tneg");
let sGen = document.getElementById("sujet_gen");
let sCha = document.getElementById("sujet_chamb");
let sSpa = document.getElementById("sujet_spa");
let sRes = document.getElementById("sujet_restau");
let bAvis = document.getElementById("avis_body");
let errAvis = document.getElementById("erreur_avis");
let ajAvGen = document.getElementById("ts_avis_gen");
let ajAvCha = document.getElementById("ts_avis_chamb");
let ajAvSpa = document.getElementById("ts_avis_spa");
let ajAvRes = document.getElementById("ts_avis_restau");
// recrutement et contact
let maPage;

// Déclaration des fonctions

// tout ce qui est interraction switch de contenu via boutons
const switchResa1 = () => {
  console.log("test");
  switchChoix(
    $("#affiche_chambre"),
    $("#affiche_spa"),
    $("#choix_chambre"),
    $("#choix_spa")
  );
};
const switchResa2 = () => {
  switchChoix(
    $("#affiche_spa"),
    $("#affiche_chambre"),
    $("#choix_spa"),
    $("#choix_chambre")
  );
};
const switchAvis1 = () => {
  tabBtnInact = [$("#avis_chamb"), $("#avis_spa"), $("#avis_restau")];
  tabContInact = [$("#ts_avis_chamb"), $("#ts_avis_spa"), $("#ts_avis_restau")];
  switchnbChoix($("#avis_gen"), $("#ts_avis_gen"), tabBtnInact, tabContInact);
};
const switchAvis2 = () => {
  tabBtnInact = [$("#avis_gen"), $("#avis_spa"), $("#avis_restau")];
  tabContInact = [$("#ts_avis_gen"), $("#ts_avis_spa"), $("#ts_avis_restau")];
  switchnbChoix(
    $("#avis_chamb"),
    $("#ts_avis_chamb"),
    tabBtnInact,
    tabContInact
  );
};
const switchAvis3 = () => {
  tabBtnInact = [$("#avis_gen"), $("#avis_chamb"), $("#avis_restau")];
  tabContInact = [$("#ts_avis_gen"), $("#ts_avis_chamb"), $("#ts_avis_restau")];
  switchnbChoix($("#avis_spa"), $("#ts_avis_spa"), tabBtnInact, tabContInact);
};
const switchAvis4 = () => {
  tabBtnInact = [$("#avis_gen"), $("#avis_chamb"), $("#avis_spa")];
  tabContInact = [$("#ts_avis_gen"), $("#ts_avis_chamb"), $("#ts_avis_spa")];
  switchnbChoix(
    $("#avis_restau"),
    $("#ts_avis_restau"),
    tabBtnInact,
    tabContInact
  );
};

// 2 boutons et 2 contenus à interchanger
const switchChoix = (btnAct, btnInact, contentAct, contentInact) => {
  btnAct.css({
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: "80%",
  });
  contentAct.css("display", "block");
  btnInact.css({
    borderBottomLeftRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
    width: "20%",
  });
  contentInact.css("display", "none");
};

// davantage de boutons et de contenus
const switchnbChoix = (btnAct, contentAct, btnInact, contentInact) => {
  btnAct.css({
    width: "42%",
    backgroundColor: "rgb(15, 70, 5)",
  });

  contentAct.css("display", "block");

  for (i = 0; i < btnInact.length; i++) {
    btnInact[i].css({
      width: "19%",
      backgroundColor: "rgb(69, 7, 1)",
    });
  }

  for (i = 0; i < contentInact.length; i++) {
    contentInact[i].css("display", "none");
  }
};

// concernant le post de commentaires

const post = (event) => {
  event.preventDefault();
  errAvis.innerHTML = "";
  verifCompl();
  if (completAvis) {
    cssAvis();
    divAvis.innerHTML += `<div class="un_avis ${couleurAvis}">
            <p class="avis_head mtb_1">
              <span class="bold">${nomAvis.value}</span> - <span>xx/xx/xxxx</span> -
              séjour de <span>${durAvis.value}</span> jours
            </p>
            <p class="avis_body">
              ${bAvis.value}
            </p>
          </div>`;
    alert("Nous vous remercions d'avoir laissé votre avis");
  }
};

const verifCompl = () => {
  if (nomAvis.value == "") {
    errAvis.innerHTML = "Veuillez compléter votre nom pour laisser un avis";
  } else if (durAvis.value == "") {
    errAvis.innerHTML =
      "Veuillez compléter la durée de votre séjour pour laisser un avis";
  } else if (bAvis.value == "") {
    errAvis.innerHTML = "Veuillez compléter le contenu de votre avis";
  } else {
    if (isNaN(durAvis.value)) {
      errAvis.innerHTML =
        'Veuillez mettre seulement des chiffres dans la case "durée du séjour"';
    } else {
      if (
        tPos.checked ||
        pos.checked ||
        pass.checked ||
        neg.checked ||
        tNeg.checked
      ) {
        if (sGen.checked || sCha.checked || sSpa.checked || sRes.checked) {
          completAvis = true;
        } else {
          errAvis.innerHTML = "Veuillez cocher le sujet de votre avis";
        }
      } else {
        errAvis.innerHTML = "Veuillez cocher la teneur de votre avis";
      }
    }
  }
};

const cssAvis = () => {
  if (sGen.checked) {
    divAvis = ajAvGen;
  } else if (sCha.checked) {
    divAvis = ajAvCha;
  } else if (sSpa.checked) {
    divAvis = ajAvSpa;
  } else if (sRes.checked) {
    divAvis = ajAvRes;
  } else {
    errAvis.innerHTML =
      "Quelque chose d'anormal vient de se passer, veuillez contacter l'assistance technique";
  }
  if (tPos.checked) {
    couleurAvis = "tptif";
  } else if (pos.checked) {
    couleurAvis = "ptif";
  } else if (pass.checked) {
    couleurAvis = "passable";
  } else if (neg.checked) {
    couleurAvis = "ntif";
  } else if (tNeg.checked) {
    couleurAvis = "tntif";
  } else {
    errAvis.innerHTML =
      "Quelque chose d'anormal vient de se passer, veuillez contacter l'assistance technique";
  }
};

// concernant les pages de contact et recrutement

const postContact = (event) => {
  event.preventDefault();
  $("#err_contact").innerHTML = "";
  maPage = "contact";
  if (
    videounon($("#nom_contact").val(), "nom") &&
    videounon($("#prenom_contact").val(), "prenom") &&
    videounon($("#entreprise_contact").val(), "entreprise") &&
    videounon($("#email_contact").val(), "email") &&
    videounon($("#pays_contact").val(), "pays") &&
    videounon($("#sujet_contact").val(), "sujet") &&
    videounon($("#body_contact").val(), "message")
  ) {
    alert(
      "Votre message nous a bien été envoyé. Nous vous répondrons prochainement"
    );
  }
};

const postRecrut = (event) => {
  event.preventDefault();
  $("#err_recrutement").innerHTML = "";
  maPage = "recrutement";
  if (
    videounon($("#nom_recrutement").val(), "nom") &&
    videounon($("#prenom_recrutement").val(), "prenom") &&
    videounon($("#email_recrutement").val(), "email") &&
    videounon($("#body_recrutement").val(), "message") &&
    fileounon($("#cv_recrutement"), "CV") &&
    fileounon($("#lettre_recrutement"), "lettre de motivation")
  ) {
    alert("Votre candidature nous a bien été envoyée");
  }
};

const videounon = (chaine, type) => {
  if (chaine == "") {
    console.log("test");
    document.getElementById("err_" + maPage).innerHTML =
      "Veuillez compléter votre " + type;
    return false;
  } else {
    return true;
  }
};

const fileounon = (input, type) => {
  if (input[0].files.length == 0) {
    document.getElementById("err_" + maPage).innerHTML =
      "Veuillez nous transmettre votre " + type;
    return false;
  } else {
    return true;
  }
};

// Activation

$(document).ready(function () {
  btnNavptt.addEventListener("click", function () {
    cNavptt.style.display = "flex";
  });

  fNavptt.addEventListener("click", function () {
    cNavptt.style.display = "none";
  });

  $(".carousel").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  });

  // page de réservation

  $("#affiche_chambre").click(switchResa1);
  $("#affiche_spa").click(switchResa2);

  // page des avis

  // boutons
  $("#avis_gen").click(switchAvis1);
  $("#avis_chamb").click(switchAvis2);
  $("#avis_spa").click(switchAvis3);
  $("#avis_restau").click(switchAvis4);

  // post d'avis

  $("#form_avis").submit(post);

  // envoi d'un message dans contact

  $("#form_contact").submit(postContact);

  // envoi d'une candidature dans recrutement
  $("#form_recrutement").submit(postRecrut);
});
