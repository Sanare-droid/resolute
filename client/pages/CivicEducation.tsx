import { useState } from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Scale,
  Calendar,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Users,
  FileText,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const CivicEducation = () => {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const timelineEvents = [
    {
      date: "2000",
      title:
        language === "en"
          ? "Initial Ownership Claim"
          : "Dai la Awali la Umiliki",
      description:
        language === "en"
          ? "Civil Case No. 1565 of 2000: Kunini claimed ownership of Olkiombo land and won through a consent judgment"
          : "Kesi ya Kiraia Na. 1565 ya 2000: Kunini alidai umiliki wa ardhi ya Olkiombo na kushinda kupitia uamuzi wa makubaliano",
      status: "completed",
      caseNumber: "Civil Case No. 1565/2000",
    },
    {
      date: "2002",
      title: language === "en" ? "Title Challenge" : "Changamoto ya Hati",
      description:
        language === "en"
          ? "Civil Suit No. 1271 of 2002: Olkiombo Ltd challenged Kunini's title, but Kunini retained his ownership rights"
          : "Kesi ya Kiraia Na. 1271 ya 2002: Olkiombo Ltd ilichallengi hati ya Kunini, lakini Kunini alihifadhi haki zake za umiliki",
      status: "completed",
      caseNumber: "Civil Suit No. 1271/2002",
    },
    {
      date: "2010",
      title:
        language === "en"
          ? "Government Revocation"
          : "Kubatilishwa na Serikali",
      description:
        language === "en"
          ? "Government revoked Kunini's title through a Gazette notice. Title was cancelled and Kunini lost land ownership"
          : "Serikali ilibatilisha hati ya Kunini kupitia tangazo la Gazeti. Hati ilifutwa na Kunini alipoteza umiliki wa ardhi",
      status: "completed",
      caseNumber: "Gazette Notice 2010",
    },
    {
      date: "2014",
      title:
        language === "en" ? "Appeal to High Court" : "Rufaa kwa Mahakama Kuu",
      description:
        language === "en"
          ? "Case No. 169 of 2014: Kunini challenged the revocation when Tunai was governor but lost the case"
          : "Kesi Na. 169 ya 2014: Kunini alipinga kubatilishwa wakati Tunai alikuwa gavana lakini alipoteza kesi",
      status: "completed",
      caseNumber: "Case No. 169/2014",
    },
    {
      date: "2015",
      title:
        language === "en"
          ? "Appellate Court Victory"
          : "Ushindi wa Mahakama ya Rufaa",
      description:
        language === "en"
          ? "Appeal Case No. 109 of 2015: Kunini appealed to the Court of Appeal and won, overturning the High Court decision"
          : "Rufaa Na. 109 ya 2015: Kunini alirufaa kwa Mahakama ya Rufaa na kushinda, akibadilisha uamuzi wa Mahakama Kuu",
      status: "completed",
      caseNumber: "Appeal No. 109/2015",
    },
    {
      date: "2018",
      title:
        language === "en"
          ? "Supreme Court Referral"
          : "Marejesho ya Mahakama Kuu Zaidi",
      description:
        language === "en"
          ? "Supreme Court Case No. 03 of 2015: The apex court referred the matter back to Narok Environment and Land Court for determination"
          : "Kesi ya Mahakama Kuu Zaidi Na. 03 ya 2015: Mahakama kuu zaidi ilirudisha suala kwa Mahakama ya Mazingira na Ardhi ya Narok kwa uamuzi",
      status: "completed",
      caseNumber: "Supreme Court Case No. 03/2015",
    },
    {
      date: "March 6, 2025",
      title:
        language === "en"
          ? "Environment and Land Court Judgment"
          : "Uamuzi wa Mahakama ya Mazingira na Ardhi",
      description:
        language === "en"
          ? "Justice Charles Mbogo delivered judgment in favor of Kunini Ntutu, granting ownership of 4,700 acres within Maasai Mara ecosystem despite contested evidence"
          : "Jaji Charles Mbogo alitoa uamuzi kwa fadhili ya Kunini Ntutu, akimpa umiliki wa ekari 4,700 ndani ya mfumo wa mazingira wa Maasai Mara licha ya ushahidi uliojadiliwa",
      status: "completed",
      caseNumber: "Environment & Land Case 21/2021",
    },
    {
      date: "2025",
      title:
        language === "en"
          ? "Pending County Appeal"
          : "Rufaa ya Kaunti Inayosubiri",
      description:
        language === "en"
          ? "Narok County Government filed notice of appeal challenging J Mbogo's March 6, 2025 judgment. Appeal pending determination"
          : "Serikali ya Kaunti ya Narok imewasilisha notisi ya rufaa kukana uamuzi wa J Mbogo wa Machi 6, 2025. Rufaa inasubiri uamuzi",
      status: "active",
      caseNumber: "Notice of Appeal 2025",
    },
  ];

  const faqs = [
    {
      question:
        language === "en"
          ? "What makes the Olkiombo case significant?"
          : "Ni nini kinachofanya kesi ya Olkiombo kuwa muhimu?",
      answer:
        language === "en"
          ? "The Olkiombo case is significant because it demonstrates the complexity of land disputes in Kenya, involving multiple parties (individual landowner, corporate entity, and government) and spanning 25 years across different court levels. It shows how land rights cases can evolve and the importance of persistent legal action."
          : "Kesi ya Olkiombo ni muhimu kwa sababu inaonyesha ugumu wa migogoro ya ardhi nchini Kenya, ikihusisha makundi mengi (mmiliki binafsi wa ardhi, shirika la kibiashara, na serikali) na kuenea miaka 25 katika ngazi mbalimbali za mahakama. Inaonyesha jinsi kesi za haki za ardhi zinavyoweza kubadilika na umuhimu wa hatua za kisheria za kudumu.",
    },
    {
      question:
        language === "en"
          ? "Why did the Supreme Court refer the case back?"
          : "Kwa nini Mahakama Kuu Zaidi ilirudisha kesi?",
      answer:
        language === "en"
          ? "In 2018, the Supreme Court referred the matter back to the Narok Environment and Land Court rather than making a final determination. This suggests the apex court felt the lower court needed to re-examine specific aspects of the case or follow proper procedures that may have been missed in earlier proceedings."
          : "Mnamo 2018, Mahakama Kuu Zaidi ilirudisha suala kwa Mahakama ya Mazingira na Ardhi ya Narok badala ya kufanya uamuzi wa mwisho. Hii inapendekeza kwamba mahakama kuu zaidi ilihisi mahakama ya chini inahitaji kuchunguza tena vipengele fulani vya kesi au kufuata taratibu sahihi ambazo zinaweza kuwa zimekosekana katika shughuli za awali.",
    },
    {
      question:
        language === "en"
          ? "What is the current status of the case?"
          : "Je, hali ya sasa ya kesi ni ipi?",
      answer:
        language === "en"
          ? "As of 2025, there is a pending appeal (No. 052 of 2025) that has not yet been determined. This shows the case is still active in the court system, over two decades after it began. The outcome will depend on the court's interpretation of the various judgments and legal principles involved."
          : "Kufikia mwaka 2025, kuna rufaa inayosubiri (Na. 052 ya 2025) ambayo bado haijaamuliwa. Hii inaonyesha kesi bado ni hai katika mfumo wa mahakama, zaidi ya miongo miwili baada ya kuanza. Matokeo yatategemea tafsiri ya mahakama ya maamuzi mbalimbali na kanuni za kisheria zinazohusika.",
    },
    {
      question:
        language === "en"
          ? "What lessons does this case teach about land rights?"
          : "Ni masomo gani kesi hii inafundisha kuhusu haki za ardhi?",
      answer:
        language === "en"
          ? "The case teaches that land disputes can be extremely protracted and complex, involving multiple legal challenges and different court levels. It shows the importance of proper documentation, the role of government in land allocation, and how corporate interests can conflict with individual land ownership. It also demonstrates that persistence in the legal system can lead to different outcomes at different stages."
          : "Kesi inafundisha kwamba migogoro ya ardhi inaweza kuwa ya muda mrefu sana na ngumu, ikihusisha changamoto nyingi za kisheria na ngazi mbalimbali za mahakama. Inaonyesha umuhimu wa uandikaji sahihi, jukumu la serikali katika ugawaji wa ardhi, na jinsi maslahi ya makampuni yanavyoweza kupingana na umiliki wa ardhi wa mtu binafsi. Pia inaonyesha kwamba uvumilivu katika mfumo wa kisheria unaweza kusababisha matokeo tofauti katika hatua mbalimbali.",
    },
  ];

  const resources = [
    {
      title:
        language === "en"
          ? "Community Land Act 2016"
          : "Sheria ya Ardhi ya Jamii 2016",
      description:
        language === "en"
          ? "Full text of the legislation governing community land rights"
          : "Maandishi kamili ya sheria inayosimamia haki za ardhi ya jamii",
      icon: FileText,
      type: "pdf",
    },
    {
      title:
        language === "en"
          ? "Know Your Land Rights Guide"
          : "Mwongozo wa Kujua Haki Zako za Ardhi",
      description:
        language === "en"
          ? "Comprehensive guide for communities on land rights"
          : "Mwongozo wa kina kwa jamii kuhusu haki za ardhi",
      icon: BookOpen,
      type: "pdf",
    },
    {
      title:
        language === "en"
          ? "Legal Aid Contacts"
          : "Mawasiliano ya Msaada wa Kisheria",
      description:
        language === "en"
          ? "Directory of legal aid organizations across Kenya"
          : "Orodha ya mashirika ya msaada wa kisheria nchini Kenya",
      icon: Users,
      type: "contact",
    },
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-resolute-green via-resolute-light-green to-resolute-pale-green py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-12">
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-resolute-yellow" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {language === "en"
                  ? "The Olkiombo Land Case"
                  : "Kesi ya Ardhi ya Olkiombo"}
              </h1>
              <p className="text-xl mb-8 text-white text-opacity-95 leading-relaxed max-w-4xl mx-auto">
                {language === "en"
                  ? "A comprehensive look at the complex legal journey of the Olkiombo land case, spanning over two decades of court proceedings and highlighting the intricacies of land rights in Kenya."
                  : "Mchanganuo wa kina wa safari ngumu ya kisheria ya kesi ya ardhi ya Olkiombo, inayoenea zaidi ya miongo miwili ya shughuli za mahakama na kuonyesha ugumu wa haki za ardhi nchini Kenya."}
              </p>
            </div>
          </div>
        </section>

        {/* Olkiombo Case Overview */}
        <section className="py-16 bg-gray-50 relative overflow-hidden">
          {/* Floating background elements */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-resolute-green opacity-5 rounded-full blur-3xl animate-luxury-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-resolute-yellow opacity-5 rounded-full blur-3xl animate-luxury-float"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <Scale className="w-12 h-12 mx-auto mb-4 text-resolute-green animate-luxury-float" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-scale-in">
                {language === "en"
                  ? "Case Overview: Kunini vs. Government & Olkiombo Ltd"
                  : "Muhtasari wa Kesi: Kunini dhidi ya Serikali na Olkiombo Ltd"}
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                {language === "en"
                  ? "A complex 25-year legal battle involving land ownership disputes, government intervention, and multiple court proceedings that illustrates the challenges of land rights in Kenya."
                  : "Mapigano magumu ya kisheria ya miaka 25 yanayohusisha migogoro ya umiliki wa ardhi, uingiliaji wa serikali, na shughuli nyingi za mahakama zinazonyesha changamoto za haki za ardhi nchini Kenya."}
              </p>
            </div>

            {/* Land Map Section */}
            <div
              className="bg-white rounded-2xl shadow-xl p-8 mb-8 glass animate-scale-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="text-center mb-6">
                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in-up"
                  style={{ animationDelay: "400ms" }}
                >
                  {language === "en"
                    ? "Disputed Olkiombo Land Area"
                    : "Eneo la Ardhi ya Olkiombo Linalojadiliwa"}
                </h3>
                <p
                  className="text-gray-600 animate-fade-in-up"
                  style={{ animationDelay: "500ms" }}
                >
                  {language === "en"
                    ? "Official survey map showing the contested 4,700-acre area within the Maasai Mara ecosystem"
                    : "Ramani rasmi ya upimaji inayoonyesha eneo la ekari 4,700 linalojadiliwa ndani ya mfumo wa mazingira wa Maasai Mara"}
                </p>
              </div>

              <div
                className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-green-50 to-gray-50 p-4 animate-fade-in-up"
                style={{ animationDelay: "600ms" }}
              >
                <div className="relative group cursor-pointer">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F0f7bde685416479ab2cfdd2fa6980d09%2Fa85fd02acca34d85a7ed5c3cb2c2b840?format=webp&width=800"
                    alt={
                      language === "en"
                        ? "Olkiombo Land Dispute Map"
                        : "Ramani ya Mgogoro wa Ardhi ya Olkiombo"
                    }
                    className="w-full h-auto rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium bg-black/50 backdrop-blur-sm rounded px-3 py-2">
                      {language === "en"
                        ? "Click to view full resolution map"
                        : "Bofya kuona ramani ya ufumbuzi kamili"}
                    </p>
                  </div>
                </div>

                {/* Map Legend */}
                <div
                  className="mt-6 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 animate-fade-in-up"
                  style={{ animationDelay: "800ms" }}
                >
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-resolute-green rounded-full mr-2 animate-pulse"></div>
                    {language === "en" ? "Map Legend" : "Ufafanuzi wa Ramani"}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-pink-300 border border-pink-400 rounded"></div>
                      <span className="text-gray-700">
                        {language === "en"
                          ? "Disputed Area (LR No.29640)"
                          : "Eneo Linalojadiliwa (LR Na.29640)"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-300 border border-green-400 rounded"></div>
                      <span className="text-gray-700">
                        {language === "en"
                          ? "Maasai Mara National Reserve"
                          : "Hifadhi ya Taifa ya Maasai Mara"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-1 bg-yellow-600 rounded"></div>
                      <span className="text-gray-700">
                        {language === "en"
                          ? "International Boundary (Kenya-Tanzania)"
                          : "Mpaka wa Kimataifa (Kenya-Tanzania)"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-1 bg-gray-600 rounded"></div>
                      <span className="text-gray-700">
                        {language === "en"
                          ? "Trans-Mara Reserve Boundary"
                          : "Mpaka wa Hifadhi ya Trans-Mara"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Information */}
                <div
                  className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4 animate-fade-in-up"
                  style={{ animationDelay: "1000ms" }}
                >
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 animate-pulse" />
                    <div>
                      <h5 className="font-semibold text-red-800 mb-2">
                        {language === "en"
                          ? "Key Dispute Points"
                          : "Mambo Makuu ya Mgogoro"}
                      </h5>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>
                          •{" "}
                          {language === "en"
                            ? "Area exceeds approved 47.2 sq km boundary"
                            : "Eneo linazidi mpaka ulioitishwa wa kilomita za mraba 47.2"}
                        </li>
                        <li>
                          •{" "}
                          {language === "en"
                            ? "Encroachment into Maasai Mara National Reserve"
                            : "Uvamizi kwenye Hifadhi ya Taifa ya Maasai Mara"}
                        </li>
                        <li>
                          •{" "}
                          {language === "en"
                            ? "No official record of Parcel 155 in adjudication files"
                            : "Hakuna rekodi rasmi ya Pakiti 155 katika faili za uamuzi"}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl shadow-xl p-8 mb-8 glass animate-scale-in"
              style={{ animationDelay: "400ms" }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "600ms" }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {language === "en" ? "Case Summary" : "Muhtasari wa Kesi"}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {language === "en"
                      ? "The Olkiombo land case represents one of Kenya's most complex land disputes, beginning in 2000 when Kunini successfully claimed ownership through the courts. The case has moved through multiple court levels including the High Court, Court of Appeal, and Supreme Court, with the matter currently pending final determination after being referred back to the Narok Environment and Land Court."
                      : "Kesi ya ardhi ya Olkiombo inawakilisha mojawapo ya migogoro magumu zaidi ya ardhi nchini Kenya, ikianza mnamo 2000 wakati Kunini alidai umiliki kwa mafanikio kupitia mahakama. Kesi imepitia ngazi nyingi za mahakama ikiwa ni pamoja na Mahakama Kuu, Mahakama ya Rufaa, na Mahakama Kuu Zaidi, na suala hilo bado linasubiri uamuzi wa mwisho baada ya kurejeeshwa kwa Mahakama ya Mazingira na Ardhi ya Narok."}
                  </p>
                  <a
                    href="https://kenyalaw.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-resolute-green text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 animate-pulse" />
                    {language === "en"
                      ? "View Cases on Kenya Law"
                      : "Ona Kesi kwenye Sheria ya Kenya"}
                  </a>
                </div>
                <div
                  className="bg-gradient-to-br from-resolute-yellow to-yellow-400 p-6 rounded-xl luxury-card animate-fade-in-up"
                  style={{ animationDelay: "800ms" }}
                >
                  <div className="text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer rounded-xl"></div>
                    <AlertCircle className="w-16 h-16 mx-auto mb-4 text-resolute-green animate-luxury-float relative z-10" />
                    <h4 className="text-xl font-bold text-resolute-green mb-2 relative z-10">
                      {language === "en"
                        ? "Case Still Pending"
                        : "Kesi Bado Inasubiri"}
                    </h4>
                    <p className="text-resolute-green relative z-10">
                      {language === "en"
                        ? "25-year legal journey continues with 2025 appeal pending determination"
                        : "Safari ya kisheria ya miaka 25 inaendelea na rufaa ya 2025 inasubiri uamuzi"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-resolute-green" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === "en"
                  ? "Legal Timeline: 2000-2025"
                  : "Ratiba ya Kisheria: 2000-2025"}
              </h2>
              <p className="text-lg text-gray-600">
                {language === "en"
                  ? "Chronological progression of the Olkiombo land case through various court levels"
                  : "Maendeleo ya kihistoria ya kesi ya ardhi ya Olkiombo kupitia ngazi mbalimbali za mahakama"}
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-resolute-green"></div>
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div
                    className={`w-4 h-4 rounded-full border-4 ${
                      event.status === "completed"
                        ? "bg-resolute-green border-resolute-green"
                        : "bg-resolute-yellow border-resolute-yellow"
                    } mr-6 mt-2 z-10`}
                  ></div>
                  <div className="flex-1">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {event.title}
                        </h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {event.date}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{event.description}</p>
                      {event.caseNumber && (
                        <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium">
                          {event.caseNumber}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ignored Evidence Section */}
        <section className="py-16 bg-red-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === "en"
                  ? "Controversial March 6, 2025 Judgment: Evidence Concerns"
                  : "Uamuzi wa Kutisha wa Machi 6, 2025: Wasiwasi wa Ushahidi"}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {language === "en"
                  ? "Justice Charles Mbogo's ruling in favor of Kunini Ntutu has raised serious questions about the handling of evidence and procedural fairness in the Olkiombo land case."
                  : "Uamuzi wa Jaji Charles Mbogo kwa fadhili ya Kunini Ntutu umezua maswali makubwa kuhusu utunzaji wa ushahidi na haki za utaratibu katika kesi ya ardhi ya Olkiombo."}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-red-700 mb-6">
                    {language === "en"
                      ? "Key Evidence Allegedly Ignored"
                      : "Ushahidi Mkuu Ulioachwa"}
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {language === "en"
                            ? "DW3 - Cleophas Leshan Tokosh (Chief Officer for Land, Narok County)"
                            : "DW3 - Cleophas Leshan Tokosh (Afisa Mkuu wa Ardhi, Kaunti ya Narok)"}
                        </h4>
                        <p className="text-gray-700 mb-2">
                          {language === "en"
                            ? "Testified that the area required degazettement which hadn't been done. Confirmed adjudication only accounted for 154 parcels with no record of Parcel 155. Produced KWS letters highlighting boundary errors and encroachment into Maasai Mara National Reserve."
                            : "Alishuhudia kwamba eneo hilo lilihitaji kuondolewa kwenye gazeti ambalo halikuwa limefanywa. Alithibitisha kwamba uamuzi ulihusisha pakiti 154 tu bila rekodi ya Pakiti 155. Alitoa barua za KWS zinazoonyesha makosa ya mipaka na uvamizi wa Hifadhi ya Taifa ya Maasai Mara."}
                        </p>
                        <span className="text-xs text-red-600 font-medium">
                          Paragraphs 78-91 ignored
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {language === "en"
                            ? "DW4 - John Ongalo Laku (Retired Deputy Director of Land Adjudication)"
                            : "DW4 - John Ongalo Laku (Naibu Mkurugenzi wa Zamani wa Uamuzi wa Ardhi)"}
                        </h4>
                        <p className="text-gray-700 mb-2">
                          {language === "en"
                            ? "Explained that adjudication did not legally recognize Parcel 155. Clarified that land couldn't be adjudicated without first being excised from game reserve through gazettement. Confirmed parcel allocations stopped at 154."
                            : "Alieleza kwamba uamuzi haukutambua kisheria Pakiti 155. Alifafanua kwamba ardhi haikuweza kuamuliwa bila kwanza kuondolewa kwenye hifadhi ya wanyamapori kupitia gazeti. Alithibitisha kwamba ugawaji wa pakiti uliishia 154."}
                        </p>
                        <span className="text-xs text-red-600 font-medium">
                          Paragraphs 92-98 ignored
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {language === "en"
                            ? "DW5 - Tom Manja Chepkwesi (Land Registrar, Ministry of Lands)"
                            : "DW5 - Tom Manja Chepkwesi (Msajili wa Ardhi, Wizara ya Ardhi)"}
                        </h4>
                        <p className="text-gray-700 mb-2">
                          {language === "en"
                            ? "Confirmed land records only accounted for 154 parcels, proving Parcel 155 was fraudulently registered. Testified that adjudication records showing 155 parcels were altered. Presented letter from Director proving Parcel 155 wasn't approved."
                            : "Alithibitisha kwamba rekodi za ardhi zilihusisha pakiti 154 tu, ikithibitisha kwamba Pakiti 155 ilisajiliwa kwa udanganyifu. Alishuhudia kwamba rekodi za uamuzi zinazoonyesha pakiti 155 zilipindiliwa. Alitoa barua kutoka kwa Mkurugenzi ikithibitisha kwamba Pakiti 155 haikuidhinishwa."}
                        </p>
                        <span className="text-xs text-red-600 font-medium">
                          Paragraphs 102-110 ignored
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {language === "en"
                            ? "DW6 - Maurice Robert Otieno (Assistant Director, Land Adjudication)"
                            : "DW6 - Maurice Robert Otieno (Msaidizi Mkurugenzi, Uamuzi wa Ardhi)"}
                        </h4>
                        <p className="text-gray-700 mb-2">
                          {language === "en"
                            ? "Confirmed Parcel 155 didn't exist in official records. Declared titles are issued based on area lists, and Parcel 155 wasn't in approved list. Stated Legal Notice No. 412 was improperly interpreted in the ruling."
                            : "Alithibitisha kwamba Pakiti 155 haikuwepo kwenye rekodi rasmi. Alitangaza kwamba hati zinatolewa kulingana na orodha za maeneo, na Pakiti 155 haikuwa kwenye orodha iliyoidhinishwa. Alisema kwamba Tangazo la Kisheria Na. 412 lilitafsiriwa vibaya katika uamuzi."}
                        </p>
                        <span className="text-xs text-red-600 font-medium">
                          Paragraphs 117-121 ignored
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {language === "en"
                            ? "DW7 - Sammy Silas Komen Mwaita (Former Commissioner for Lands)"
                            : "DW7 - Sammy Silas Komen Mwaita (Kamishna wa Zamani wa Ardhi)"}
                        </h4>
                        <p className="text-gray-700 mb-2">
                          {language === "en"
                            ? "Wrote to Dr. Richard Leakey questioning plaintiff's title authenticity. Confirmed Legal Notice No. 412 set land area at 47.2 sq km, but plaintiff's claim exceeded this. Highlighted KWS maps showing clear encroachment beyond approved boundaries."
                            : "Aliandika kwa Dk. Richard Leakey akiuliza kuhusu ukweli wa hati ya mdai. Alithibitisha kwamba Tangazo la Kisheria Na. 412 liliweka eneo la ardhi kilomita za mraba 47.2, lakini dai la mdai lilizidi hili. Alisisitiza ramani za KWS zinazoonyesha uvamizi wazi zaidi ya mipaka iliyoidhinishwa."}
                        </p>
                        <span className="text-xs text-red-600 font-medium">
                          Paragraphs 122-130 ignored
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {language === "en"
                            ? "DW8 - Wilfred Muchae Kabue (Assistant Director of Survey)"
                            : "DW8 - Wilfred Muchae Kabue (Msaidizi Mkurugenzi wa Upimaji)"}
                        </h4>
                        <p className="text-gray-700 mb-2">
                          {language === "en"
                            ? "Testified official survey records only accounted for 154 parcels with no record of Parcel 155. Confirmed disputed area was inside game reserve based on government survey maps. Approved area was 47.2 sq km but plaintiff's claim exceeded boundary."
                            : "Alishuhudia kwamba rekodi rasmi za upimaji zilihusisha pakiti 154 tu bila rekodi ya Pakiti 155. Alithibitisha kwamba eneo la mgogoro lilikuwa ndani ya hifadhi ya wanyamapori kulingana na ramani za upimaji za serikali. Eneo lilioidhinishwa lilikuwa kilomita za mraba 47.2 lakini dai la mdai lilizidi mpaka."}
                        </p>
                        <span className="text-xs text-red-600 font-medium">
                          Paragraphs 131-143 ignored
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-red-800 mb-4">
                    {language === "en" ? "Judgment Download" : "Pakua Uamuzi"}
                  </h3>
                  <p className="text-red-700 mb-6">
                    {language === "en"
                      ? "Access the complete judgment by Justice Charles Mbogo delivered on March 6, 2025, regarding Environment & Land Case 21 of 2021."
                      : "Fikia uamuzi kamili wa Jaji Charles Mbogo uliotolewa Machi 6, 2025, kuhusu Kesi ya Mazingira na Ardhi 21 ya 2021."}
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://new.kenyalaw.org/akn/ke/judgment/keelc/2025/1064/eng%402025-03-06"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors w-full justify-center"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {language === "en"
                        ? "Download from Kenya Law"
                        : "Pakua kutoka Sheria ya Kenya"}
                    </a>
                    <p className="text-sm text-red-600">
                      <strong>Case Reference:</strong> Environment & Land Case
                      21 of 2021
                      <br />
                      <strong>Judge:</strong> Hon. Justice Charles Mbogo
                      <br />
                      <strong>Date:</strong> March 6, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <div className="flex">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    {language === "en"
                      ? "Community Response"
                      : "Mjibu wa Jamii"}
                  </h3>
                  <p className="text-yellow-700">
                    {language === "en"
                      ? "Following the judgment, hundreds of Maasai residents protested on March 7, 2025, expressing concerns that their ancestral land rights and cultural heritage were not adequately protected in the legal proceedings."
                      : "Baada ya uamuzi huo, mamia ya wakazi wa Kimaasai walipiga maandamano Machi 7, 2025, wakionyesha wasiwasi kwamba haki zao za ardhi za mababu na urithi wa kitamaduni hazikukilindwa ipasavyo katika shughuli za kisheria."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <AlertCircle className="w-12 h-12 mx-auto mb-4 text-resolute-green" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === "en"
                  ? "Frequently Asked Questions"
                  : "Maswali Yanayoulizwa Mara kwa Mara"}
              </h2>
              <p className="text-lg text-gray-600">
                {language === "en"
                  ? "Understanding the implications and lessons from the Olkiombo case"
                  : "Kuelewa madhara na masomo kutoka kesi ya Olkiombo"}
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Download className="w-12 h-12 mx-auto mb-4 text-resolute-green" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === "en"
                  ? "Educational Resources"
                  : "Rasilimali za Kielimu"}
              </h2>
              <p className="text-lg text-gray-600">
                {language === "en"
                  ? "Download guides and access important information about land rights"
                  : "Pakua miongozo na ufikirie habari muhimu kuhusu haki za ardhi"}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <resource.icon className="w-12 h-12 text-resolute-green mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <button className="inline-flex items-center text-resolute-green font-medium hover:underline">
                    <Download className="w-4 h-4 mr-2" />
                    {language === "en" ? "Access Resource" : "Fikia Rasilimali"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-resolute-green to-resolute-light-green">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "en"
                ? "Need Legal Assistance?"
                : "Unahitaji Msaada wa Kisheria?"}
            </h2>
            <p className="text-xl mb-8 text-white text-opacity-95">
              {language === "en"
                ? "If your community is facing land rights issues, we can help connect you with legal resources and advocacy support."
                : "Ikiwa jamii yako inakabiliwa na masuala ya haki za ardhi, tunaweza kukusaidia kuunganisha na rasilimali za kisheria na msaada wa utetezi."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-resolute-yellow text-resolute-green px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 text-center"
              >
                {language === "en"
                  ? "Contact Our Legal Team"
                  : "Wasiliana na Timu Yetu ya Kisheria"}
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-resolute-green hover:scale-105 transition-all duration-300 text-center"
              >
                {language === "en"
                  ? "Request Community Workshop"
                  : "Omba Warsha ya Jamii"}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CivicEducation;
