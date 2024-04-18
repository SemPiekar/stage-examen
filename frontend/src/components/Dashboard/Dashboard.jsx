import React from "react";

const Dashboard = ({ role, users }) => {
  const countUsersByRole = (targetRole) => {
    return users.filter((user) => user.role === targetRole).length;
  };
  return (
    <>
      {role === "student" && (
        <>
          {/* Dashboard for the student */}
          <div className="m-5">
            <h1 className="mb-4">Minecraft Uur van Code Tutorials</h1>
            <div className="d-flex gap-3 flex-wrap">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  className="card-img-top"
                  src="/images/lessons/mc-card2.jpg"
                  alt="Minecraft Reis door het Water"
                  style={{ height: "10rem", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Minecraft Reis door het Water</h5>
                  <p className="card-text">
                    Ontdek en bouw in Minecraft! Gebruik je creativiteit en
                    programmeervaardigheden om onderwaterwerelden te maken en te
                    verkennen.
                  </p>
                  <div className="mt-auto">
                    <a
                      target="_blank"
                      href="https://studio.code.org/s/aquatic/lessons/1/levels/1"
                      className="btn btn-primary"
                    >
                      Start les
                    </a>
                  </div>
                </div>
              </div>

              <div className="card" style={{ width: "20rem" }}>
                <img
                  className="card-img-top"
                  src="/images/lessons/mc-card1.jpg"
                  alt="Minecraft Hero's Journey"
                  style={{ height: "10rem", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Minecraft Hero's Journey</h5>
                  <p className="card-text">
                    Bouw en ontdek met Minecraft! Spelers schrijven code waarmee
                    ze instructies geven aan hun personage om taken uit te
                    voeren en in-game obstakels te overwinnen.
                  </p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-primary">
                      Start les
                    </a>
                  </div>
                </div>
              </div>

              <div className="card" style={{ width: "20rem" }}>
                <img
                  className="card-img-top"
                  src="/images/lessons/mc-card.jpg"
                  alt="Minecraft Adventurer"
                  style={{ height: "10rem", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Minecraft Adventurer</h5>
                  <p className="card-text">
                    Leer de basis van programmeren door Alex of Steve te
                    programmeren om door een gesimuleerd deel van een
                    Minecraft-wereld te bewegen.
                  </p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-primary">
                      Start les
                    </a>
                  </div>
                </div>
              </div>

              <div className="card" style={{ width: "20rem" }}>
                <img
                  className="card-img-top"
                  src="/images/lessons/mc-card3.jpg"
                  alt="Minecraft Designer"
                  style={{ height: "10rem", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Minecraft Ontwerper</h5>
                  <p className="card-text">
                    Jij bepaalt de regels in deze activiteit, waar je
                    basisvaardigheden van programmeren kunt leren om je eigen
                    Minecraft-spel te maken en te delen met anderen!
                  </p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-primary">
                      Start les
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {role === "leraar" && (
        <>
          {/* Dashboard for the teacher */}
          <div className="m-5">
            <h1 className="mb-4">Leraar Dashboard</h1>
            <div>
              <h3>Licentiebeheer</h3>
              <p>
                Beheer licenties voor het Minecraft Uur van Code programma hier. Je
                kunt licenties toewijzen aan gebruikers en hun gebruik bijhouden.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <div className="card" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src="/images/licenties/basis.png"
                    alt="Minecraft Reis door het Water"
                    style={{ height: "10rem", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Basislicentie</h5>
                    <p className="card-text"></p>
                    <div className="mt-auto">
                      <a
                        target="_blank"
                        href="https://studio.code.org/s/aquatic/lessons/1/levels/1"
                        className="btn btn-primary"
                      >
                        <i className="fa-solid fa-basket-shopping"></i> Kopen
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src="/images/licenties/geavanceerde.png"
                    alt="Minecraft Heldentocht"
                    style={{ height: "10rem", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Geavanceerde licentie</h5>
                    <p className="card-text"></p>
                    <div className="mt-auto">
                      <a href="#" className="btn btn-primary">
                        <i className="fa-solid fa-basket-shopping"></i> Kopen
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src="/images/licenties/Premium.png"
                    alt="Minecraft Avonturier"
                    style={{ height: "10rem", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Premiumlicentie</h5>
                    <p className="card-text"></p>
                    <div className="mt-auto">
                      <a href="#" className="btn btn-primary">
                        <i className="fa-solid fa-basket-shopping"></i> Kopen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h3>Voortgang bijhouden</h3>
              <p>
                Houd de voortgang van je studenten bij. Je kunt hun voltooide lessen,
                prestaties en resultaten bekijken.
              </p>
              {/* Progress tracking components */}
              <div className="d-flex gap-3 flex-wrap">
                {/* Example components */}
                <div className="card" style={{ width: "15rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Voortgang van studenten</h5>
                    <p className="card-text">
                      Bekijk de voortgang van studenten.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Bekijk voortgang
                    </a>
                  </div>
                </div>
                <div className="card" style={{ width: "15rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Voortgang van de klassen</h5>
                    <p className="card-text">
                      Houd de voortgang van alle studenten in een klas bij.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Bekijk voortgang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {role === "organisator" && (
        <>
          {/* Dashboard for the organizer */}
          <div className="m-5">
            <h1 className="mb-4">Organisator Dashboard</h1>
            <div className="mb-3">
              <h3>Overzicht</h3>
              <p>
                Welkom bij het Organisator Dashboard! Hier kun je een overzicht
                krijgen van belangrijke statistieken en licenties beheren voor
                het Minecraft Uur van Code programma.
              </p>
              {/* Placeholder for overview statistics (e.g., total students, teachers, classes, licenses) */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Overzicht Statistieken</h5>
                  <p className="card-text">
                    Totaal aantal studenten: {countUsersByRole("student")}
                    <br />
                    Totaal aantal leraren: {countUsersByRole("leraar")}
                    <br />
                    Totaal aantal organisatoren:{" "}
                    {countUsersByRole("organisator")}
                    {/* If you have additional roles, add them here */}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3>Licentiebeheer</h3>
              <p>
                Beheer licenties voor het Minecraft Uur van Code programma hier.
                Je kunt licenties toewijzen aan gebruikers en hun gebruik
                bijhouden.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <div className="card" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src="/images/licenties/basis.png"
                    alt="Minecraft Reis door het Water"
                    style={{ height: "10rem", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Basis licentie</h5>
                    <p className="card-text"></p>
                    <div className="mt-auto">
                      <a
                        target="_blank"
                        href="https://studio.code.org/s/aquatic/lessons/1/levels/1"
                        className="btn btn-primary"
                      >
                        <i className="fa-solid fa-gear"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src="/images/licenties/geavanceerde.png"
                    alt="Minecraft Heldentocht"
                    style={{ height: "10rem", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Geavanceerde licentie</h5>
                    <p className="card-text"></p>
                    <div className="mt-auto">
                      <a href="#" className="btn btn-primary">
                        <i className="fa-solid fa-gear"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ width: "15rem" }}>
                  <img
                    className="card-img-top"
                    src="/images/licenties/Premium.png"
                    alt="Minecraft Avonturier"
                    style={{ height: "10rem", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Premium licentie</h5>
                    <p className="card-text"></p>
                    <div className="mt-auto">
                      <a href="#" className="btn btn-primary">
                        <i className="fa-solid fa-gear"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
