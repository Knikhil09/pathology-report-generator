export const DOCTORS = [
    { id: "aishwarya-w", name: "Dr.Aishwarya W." },
    { id: "vishakha-j", name: "Dr. Vishakha J." },
    { id: "am-kulkarni", name: "Dr. A.M. Kulkarni" },
    { id: "mh-halgale", name: "Dr. M.H. Halgale" },
    { id: "padmini-e", name: "Dr. Padmini E." }
];

export const REPORT_TEMPLATES = [

    // =========================================================
    // 1. APPENDIX
    // =========================================================
    {
        id: "appendix",
        name: "Appendix",
        defaults: {
            natureOfSpecimen: "Appendicectomy for HPE",

            grossExamination:
                "Received appendix with mesoappendix. Appendix measuring 5cm in length. " +
                "Mesoappendix measuring 1.5x0.5x0.5 cm. Tip is intact. " +
                "External surface is congested. Cut surface shows lumen occluded with fecolith.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied show appendix comprised of mucosa, submucosa, muscularis propria and serosa. " +
                "Mucosa is focally ulcerated. Submucosa shows reactive lymphoid aggregates. " +
                "Muscularis propria shows chronic inflammatory cell infiltrate. " +
                "Serosa shows congested blood vessels.\n" +
                "No evidence of granuloma or atypia or malignancy noted in sections studied.",

            impression: "Chronic Appendicitis"
        }
    },

    // =========================================================
    // 2. BONE MARROW BIOPSY
    // =========================================================
    {
        id: "bone-marrow-biopsy",
        name: "Bone Marrow Biopsy",
        defaults: {
            natureOfSpecimen: "Bone marrow biopsy for HPE",

            grossExamination:
                "Received single linear grey white bony core measuring 2.2 cm in length.\n" +
                "(Tissue processed entirely)",

            microscopicExamination:
                "Sections studied from totally submitted biopsy show 8-9 unremarkable bony trabeculae with " +
                "normocellular marrow spaces and fat spaces. Sections studied reveal:\n" +
                "Erythroid series: Shows mild erythroid hyperplasia with micro-normoblastic maturation\n" +
                "Myeloid series: Adequate in number and show normal progressive sequential maturation.\n" +
                "Eosinophilic precursors are increased.\n" +
                "Megakaryocyte series: Adequate in number and shows normal morphology\n" +
                "No evidence of granuloma/ fungus/ atypia or malignancy noted in sections studied.",

            impression:
                "Bone Marrow Biopsy – Normocellular marrow with Micronormoblastic maturation and normal " +
                "myelopoiesis and megakaryopoiesis."
        }
    },

    // =========================================================
    // 3. ENDOMETRIAL BIOPSY
    // =========================================================
    {
        id: "endometrial-biopsy",
        name: "Endometrial Biopsy",
        defaults: {
            natureOfSpecimen: "Endometrial biopsy for HPE",

            grossExamination:
                "Received multiple reddish brown, soft tissue fragments altogether aggregating to 2cc. " +
                "(Tissue processed entirely)",

            microscopicExamination:
                "No evidence of atypia or malignancy noted in sections studied.",

            impression: "Endometrial biopsy -"
        }
    },

    // =========================================================
    // 4. BILATERAL FALLOPIAN TUBES
    // =========================================================
    {
        id: "fallopian-tubes",
        name: "Bilateral Fallopian Tubes",
        defaults: {
            natureOfSpecimen: "Bilateral fallopian tubes for HPE",

            grossExamination:
                "Received two grey brown, tubular, soft tissues measuring 0.7 cm and 0.5 cm in length. " +
                "External surface is unremarkable and cut surface shows patent lumen.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied from bilateral fallopian tubes show normal histology.\n" +
                "No evidence of granuloma/ fungus/ atypia or malignancy noted in sections studied.",

            impression: "Bilateral Fallopian tubes- Confirmed"
        }
    },

    // =========================================================
    // 5. FIBROADENOMA
    // =========================================================
    {
        id: "fibroadenoma",
        name: "Fibroadenoma",
        defaults: {
            natureOfSpecimen: "Excised Left breast swelling/lump for HPE",

            grossExamination:
                "Received single grey-white well circumscribed mass measuring cm. " +
                "Cut surface is white and shows slit like spaces. " +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied show well circumscribed tumor composed of proliferating glands and stroma " +
                "in intracanalicular and peri-canalicular pattern. Glands are lined by bilayered epithelium " +
                "as inner cuboidal and outer myoepithelial cells. Surrounding stroma is fibro-myxoid.\n" +
                "No evidence of atypia or malignancy noted in sections studied.",

            impression: "Excised Left breast swelling/lump - Fibroadenoma"
        }
    },

    // =========================================================
    // 6. GENERIC HISTOPATHOLOGY
    // =========================================================
    {
        id: "histopathology",
        name: "Histopathology Report",
        defaults: {
            natureOfSpecimen: "",
            grossExamination: "",
            microscopicExamination: "",
            impression: ""
        }
    },

    // =========================================================
    // 7. LIPOMA
    // =========================================================
    {
        id: "lipoma",
        name: "Lipoma",
        defaults: {
            natureOfSpecimen: "Excised Swelling over back for HPE",

            grossExamination:
                "Received single, yellowish, well-encapsulated mass measuring cm. " +
                "External surface is smooth and shiny. Cut surface is encapsulated, yellowish, homogenous " +
                "and greasy. (Representative sections submitted)",

            microscopicExamination:
                "Sections studied show an encapsulated tumor comprised of mature adipocytes arranged in " +
                "lobules and separated by thin fibrous septae.\n" +
                "No evidence of granuloma/s fungus/ atypia or malignancy noted in sections studied.",

            impression: "Excised Swelling over back- Lipoma"
        }
    },

    // =========================================================
    // 8. PERICARDIAL FLUID
    // =========================================================
    {
        id: "pericardial-fluid",
        name: "Pericardial Fluid",
        defaults: {
            natureOfSpecimen: "Fluid",

            grossExamination:
                "Received 50ml reddish turbid fluid labelled as pericardial fluid. " +
                "Fluid well centrifuged and cell block made.",

            microscopicExamination:
                "Sections studied from cell block shows clusters and singly scattered atypical cells. " +
                "Atypical cells are large having high N:C ratio, round to oval pleomorphic hyperchromatic nucleus " +
                "with coarse chromatin and moderate eosinophilic cytoplasm. Background is hemorrhagic and shows " +
                "occasional macrophages.",

            impression: "Pericardial Fluid – Positive for malignant cells"
        }
    },

    // =========================================================
    // 9. TONSIL / ADENOTONSIL
    // =========================================================
    {
        id: "tonsil",
        name: "Tonsil / Adenotonsil",
        defaults: {
            natureOfSpecimen: "Adenotonsil for HPE",

            grossExamination:
                "Received two globular grey white to grey brown, soft to firm tissue bit measuring " +
                "2.4 x 1.2 x 0.8 cm and 2.5 x 1.8 x 0.8 cm. External surface is congested. " +
                "Cut surface is grey-white, congested. (Representative sections submitted)",

            microscopicExamination:
                "Sections studied show tissue lined by stratified squamous epithelium. " +
                "Subepithelium shows lymphoid follicles with reactive germinal centers. " +
                "Interfollicular mononuclear cell infiltrate seen. Adjacent unremarkable seromucinous glands noted.\n" +
                "No evidence of atypia or malignancy noted in sections studied.",

            impression: "Chronic Tonsillitis"
        }
    },

    // =========================================================
    // 10. UTERUS WITH CERVIX
    // =========================================================
    {
        id: "uterus-cervix",
        name: "Uterus With Cervix",
        defaults: {
            natureOfSpecimen: "Hysterectomy specimen for HPE",

            grossExamination:
                "Received hysterectomy specimen comprised of already cut open uterus with cervix. " +
                "Uterus with cervix measures cm. Endometrial cavity and endocervical canal measures cm and cm respectively. " +
                "Endometrial thickness and myometrial thickness measures cm and cm respectively.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied from uterus with cervix show:\n" +
                "Endometrium:\n" +
                "Myometrium:\n" +
                "Ectocervix:\n" +
                "Endocervix:\n" +
                "No evidence of granuloma/ fungus/ atypia or malignancy noted in sections studied.",

            impression:
                "Endometrium: \n" +
                "Myometrium: \n" +
                "Cervix:"
        }
    },

    // =========================================================
    // 11. UTERUS WITH CERVIX + BILATERAL ADNEXAE
    // =========================================================
    {
        id: "uterus-cervix-bilateral-adnexae",
        name: "Uterus With Cervix With Bilateral Adnexae",
        defaults: {
            natureOfSpecimen: "Hysterectomy with bilateral adnexae specimen for HPE",

            grossExamination:
                "Received hysterectomy specimen comprised of already cut open uterus with cervix with attached " +
                "bilateral adnexae. Uterus with cervix measures cm. Endometrial cavity and endocervical canal measures " +
                "cm and cm respectively. Endometrial thickness and myometrial thickness measures cm and cm respectively. " +
                "Ovary measures cm. External and cut surface of ovary is unremarkable. Fallopian tube measures cm and cm. " +
                "External surface is unremarkable. Cut surface shows patent lumen.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied from uterus with cervix show:\n" +
                "Endometrium:\n" +
                "Myometrium:\n" +
                "Ectocervix:\n" +
                "Endocervix:\n" +
                "Ovary:\n" +
                "Fallopian tube:\n" +
                "No evidence of granuloma/ fungus/ atypia or malignancy noted in sections studied.",

            impression:
                "Endometrium: \n" +
                "Myometrium: \n" +
                "Cervix: \n" +
                "Ovary:\n" +
                "Fallopian tube:"
        }
    },

    // =========================================================
    // 12. SCC
    // =========================================================
    {
        id: "scc",
        name: "SCC",
        defaults: {
            natureOfSpecimen: "Right below-knee amputation",

            grossExamination:
                "Received is a right below-knee amputation specimen comprising the distal two third of tibia and fibula " +
                "with attached foot, totally measuring 28 × 22 × 8.5 cm, with overlying skin and soft tissue. " +
                "The specimen shows extensive autolytic changes.\n\n" +
                "On the posterolateral aspect of the ankle, there is a single ulcero-infiltrative growth measuring 9x8cm. " +
                "The margins are everted and indurated, and the floor is covered by yellowish mucopurulent necrotic slough. " +
                "The lesion is grey-white to grey-brown, firm in consistency, and infiltrates the underlying soft tissue " +
                "to a maximum gross depth of 1.8 cm. The underlying tibia and fibula are grossly free of tumour, with no " +
                "obvious cortical erosion. Maggots are noted within the ulcer.\n\n" +
                "The tumour is situated at the following distances from the resection margins:\n" +
                "Proximal soft tissue resection margin: 3 cm\n" +
                "Proximal skin cut margin: 6 cm\n" +
                "Proximal neurovascular bundle: 10 cm\n" +
                "Proximal bony resection margin (tibia): 16 cm\n" +
                "Proximal bony resection margin (fibula): 13 cm",

            microscopicExamination:
                "Sections studied show extensive autolytic changes. Sections studied from the ulcero-infiltrative lesion " +
                "shows scattered atypical cells with hyperchromatic pleomorphic nuclei with poorly morphologically preserved " +
                "keratin pearls. The tumour is seen infiltrating into underlying fibro collagenous tissue and skeletal muscle. " +
                "Deeper bone tissue involvement by tumor cannot be commented due to extensive autolytic changes. Dense chronic " +
                "inflammatory cell infiltrate and areas of haemorrhage, fibrosis noted. Lymph vascular and perineural invasion " +
                "are not identified in the sections examined.\n" +
                "All surgical resection margins are free of tumor.",

            impression:
                "Right Below knee amputation – Moderately differentiated Squamous cell carcinoma. " +
                "All surgical resection margins are free of tumor."
        }
    },

    // =========================================================
    // 13. SEROUS CYSTADENOFIBROMA
    // =========================================================
    {
        id: "serous-cystadenofibroma",
        name: "Serous Cystadenofibroma",
        defaults: {
            natureOfSpecimen: "Right ovarian cyst excision for HPE",

            grossExamination:
                "Received in formalin single cyst measuring 19x18x10 cm, weighing 500gm. " +
                "Single solid area noted 6x5x2.5 cm. Inner surface of cyst show papillary excrescences. " +
                "Solid area cut section show gray white, firm and papillary excrescences. " +
                "No fallopian tube identified grossly or received separately",

            microscopicExamination:
                "Sections show a cyst wall forming papillae lined by ciliated cuboidal to columnar epithelium with fibrovascular cores. " +
                "Underlying fibrocollagenous stroma shows interlacing fascicles and bundles of elongated cells with blunt ended nuclei " +
                "and moderate eosinophilic cytoplasm. Areas of hyalinization and fibrosis noted in sections studied.",

            impression: "Unilateral Ovarian cyst - Serous Cystadenofibroma"
        }
    },

    // =========================================================
    // 14. CELL BLOCK
    // =========================================================
    {
        id: "cell-block",
        name: "Cell Block",
        defaults: {
            natureOfSpecimen: "Ascitic fluid Cell block for HPE.",

            grossExamination:
                "Received 10ml reddish hazy fluid labelled as ascitic fluid. Sample well centrifuged and cell block made. " +
                "(Tissue processed entirely)",

            microscopicExamination:
                "Sections studied from tiny cell block show fibrocollagenous tissue with occasional mononuclear cell infiltrate.",

            impression: "Ascitic fluid cell block preparation- No opinion possible."
        }
    },

    // =========================================================
    // 15. PROLIFERATIVE ENDOMETRIUM
    // =========================================================
    {
        id: "proliferative-endometrium",
        name: "Proliferative Endometrium",
        defaults: {
            natureOfSpecimen: "Endometrial biopsy for HPE",

            grossExamination:
                "Received multiple reddish brown, soft tissue fragments aggregating to 2cc. " +
                "(Tissue processed entirely)",

            microscopicExamination:
                "Sections studied from the endometrial biopsy shows endometrial glands and stroma. " +
                "The endometrial glands are fragmented to round lined by tall columnar epithelium showing stratification at places. " +
                "Focal hobnail cell metaplasia and squamous metaplasia noted. Stroma is scanty compact and spindly with areas of hemorrhage.\n" +
                "No evidence of atypia or malignancy in the section studied.",

            impression: "Endometrial biopsy – Proliferative phase with focal squamous metaplasia"
        }
    },

    // =========================================================
    // 16. TUBERCULOID LEPROSY
    // =========================================================
    {
        id: "tuberculoid-leprosy",
        name: "Tuberculoid Leprosy",
        defaults: {
            natureOfSpecimen: "Skin biopsy from patch over Right shoulders for HPE",

            grossExamination:
                "Received in formalin single gray white to gray brown skin covered soft tissue bit measuring 0.4x0.2x0.1 cm " +
                "(Tissue processed entirely)",

            microscopicExamination:
                "Sections show partial thickness skin biopsy showing epidermis and dermis. Epidermis is atrophic and lined by " +
                "stratified squamous epithelium. The underlying dermis reveals perivascular and peri adnexal dense diffuse infiltrate " +
                "of lymphocytes and epithelioid histiocytes. No Langhan’s giant cells seen.\n" +
                "No evidence of well-formed granuloma or foamy histiocytes or atypia or malignancy noted in sections studied.\n" +
                "Special stain (5%) Modified ZN stain - Non-contributory.",

            impression:
                "Skin biopsy from patch over Right shoulder - Histomorphology features are suggestive of Tuberculoid Leprosy"
        }
    },

    // =========================================================
    // 17. SKIN BIOPSY
    // =========================================================
    {
        id: "skin-biopsy",
        name: "Skin Biopsy",
        defaults: {
            natureOfSpecimen: "Skin biopsy from left forearm for HPE.",

            grossExamination:
                "Received in formalin single skin covered grey white soft tissue bit measuring 0.5x0.3x0.2 cm " +
                "(Tissue processed entirely)",

            microscopicExamination:
                "Sections show tissue lined by skin. Epidermis lined by stratified squamous epithelium with underlying dermis and " +
                "subcutaneous tissue. Dermis reveals mild periadnexal chronic inflammatory infiltrate composed of lymphocytes.\n" +
                "Subcutaneous tissue is unremarkable.\n" +
                "No evidence of well-formed granuloma or foamy histiocytes or atypia or malignancy noted in sections studied.",

            impression: "Skin biopsy from left forearm – Mild chronic inflammatory lesion."
        }
    },

    // =========================================================
    // 18. PRODUCTS OF CONCEPTION
    // =========================================================
    {
        id: "products-of-conception",
        name: "Products of Conception",
        defaults: {
            natureOfSpecimen: "Products of conception for HPE",

            grossExamination:
                "Received in formalin three reddish brown friable soft tissue masses measuring 5.5x2.5x1.2 cm, " +
                "3x2x1.5 cm & 3x1.5x1 cm.\n(Tissue processed entirely)",

            microscopicExamination:
                "Sections studied show extensive hemorrhage along with few scattered fragmented endometrial glands (14, 16) " +
                "admixed with dense mixed inflammatory cell infiltrate composed of neutrophils, lymphocyte, plasma cells and fibrinoid degeneration.\n" +
                "However, chorionic villi, decidua or trophoblasts not seen in this entirely submitted tissue.\n" +
                "No evidence of atypia or malignancy noted in sections studied.\n" +
                "Advice: Correlate clinically.",

            impression: ""
        }
    },

    // =========================================================
    // 19. LIPOMA - ABDOMEN
    // =========================================================
    {
        id: "lipoma-abdomen",
        name: "Lipoma - Abdomen",
        defaults: {
            natureOfSpecimen: "Excised Swelling over Abdomen in Epigastric Region for HPE",

            grossExamination:
                "Received single, yellowish, encapsulated tissue mass measuring 4.4x4x2.5cm. " +
                "Cut surface is yellowish, homogenous and greasy in appearance.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied show an encapsulated tumor comprised of mature adipocytes arranged in lobules and separated by thin fibrous septae.\n" +
                "No evidence of atypia or malignancy noted in the sections studied.",

            impression: "Excised Swelling over Abdomen in Epigastric Region - Lipoma"
        }
    },

    // =========================================================
    // 20. UTERUS WITH CERVIX - PROLIFERATIVE ENDOMETRIUM
    // =========================================================
    {
        id: "uterus-cervix-proliferative",
        name: "Uterus With Cervix - Proliferative Endometrium",
        defaults: {
            natureOfSpecimen:
                "Hysterectomy with separately sent unilateral salphingo-oophorectomy specimen for HPE",

            grossExamination:
                "Received hysterectomy specimen comprised of uterus with cervix with separately sent single fallopian tube and ovary. " +
                "Uterus with cervix measures 9x7.5x4cm. Endometrial cavity and endocervical canal measures 2.5 cm and 2 cm respectively. " +
                "Endometrial thickness and myometrial thickness measures 0.1 cm and 3 cm respectively. Multiple intramural fibroids are seen, " +
                "largest measuring 3x2.5x2 and smallest measuring 0.3x0.2x0.2cm. Cut surface is well circumscribed, grey white, firm and shows " +
                "whorled appearance. Unilateral ovary measures 3x1.4x1.3cm. External and cut surface is unremarkable. " +
                "Unilateral fallopian tube measures 2.8cm in length. External surface is unremarkable. Cut surface shows patent lumen. " +
                "A single paratubal cyst noted measuring 0.6cm in diameter.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied from uterus with cervix with single fallopian tube and ovary show:\n" +
                "Endometrium: Shows round to tubular glands lined by tall columnar epithelium. Few glands are cystically dilated showing intraluminal eosinophilic secretions. Stroma is spindly compact.\n" +
                "Myometrium (Intramural fibroids): Shows well circumscribed tumor composed of bundles and interlacing fascicles of smooth muscle cells having elongated blunt ended nuclei and scant to moderate eosinophilic cytoplasm.\n" +
                "Cervix: Shows unremarkable ectocervix lined by stratified squamous epithelium and endocervix lined by columnar epithelium.\n" +
                "Unilateral Ovary: Shows corpus albicans and follicular cyst.\n" +
                "Unilateral Fallopian tube: Unremarkable\n" +
                "Paratubal cyst: Shows a cyst wall lined by flattened to cuboidal epithelium.\n" +
                "No evidence of atypia or malignancy noted in sections studied.",

            impression: "Endometrium: Proliferative endometrium"
        }
    },

    // =========================================================
    // 21. MELANOMA
    // =========================================================
    {
        id: "melanoma",
        name: "Melanoma",
        defaults: {
            natureOfSpecimen: "Excised melanoma (as mentioned on requisition form)",

            grossExamination:
                "Received both the specimens (1 and 2) in same container and are not labelled separately nor unoriented.\n" +
                "Received two skin covered grey brown to blackish, soft to firm tissue masses, larger measuring 2.2x2x1 cm " +
                "and smaller measuring 1.5x1.5x0.7 cm. Cut surface of larger mass is brown to black and homogenous and smaller " +
                "mass is grey white with focal brown to black discoloration.\n" +
                "Section key:\n" +
                "Larger mass: Sections 1-4 (Tissue submitted entirely)\n" +
                "Smaller mass: Sections 5-7 (Tissue submitted entirely)",

            microscopicExamination:
                "Sections studied from larger mass (1-4) show tissue with skin showing epidermis and dermis. Epidermis shows " +
                "hyperkeratotic, acanthotic, papillomatous stratified squamous epithelium along with numerous horn cysts and basal melanophages. " +
                "Underlying dermis shows unremarkable sebaceous glands and congested blood vessels.\n" +
                "Sections studied from smaller mass (5-7) show tissue lined by stratified squamous epithelium with a tumor arising from basal layer " +
                "of epidermis arranged in nests, islands and cords invading the underlying dermis. The tumor islands show peripheral nuclear palisading " +
                "and clefts in between the tumor islands and stroma. Individual tumor cells are uniform, small with hyperchromatic nuclei, scant cytoplasm. " +
                "Melanophages are seen in between the tumor nests and in the intervening stroma. Dense and diffuse mixed inflammatory cell infiltrate " +
                "composed of lymphocytes, plasma cells, neutrophils and multinucleated giant cells seen. Base of the tumor and cauterized surgical margins " +
                "appears to be free of tumor.",

            impression:
                "Larger mass - Seborrhoeic Keratosis\n" +
                "Smaller mass- Pigmented Basal Cell Carcinoma (Base of the tumor and cauterized surgical margins appears to be free of tumor)"
        }
    },

    // =========================================================
    // 22. CHRONIC APPENDICITIS
    // =========================================================
    {
        id: "chronic-appendicitis",
        name: "Chronic Appendicitis",
        defaults: {
            natureOfSpecimen: "Appendicectomy for HPE",

            grossExamination:
                "Received in formalin appendix measuring 9 cm in length. External surface is congested. Tip is intact. " +
                "Cut surface shows patent lumen.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied show appendix comprised of mucosa, submucosa, muscularis propria and serosa. " +
                "Mucosa is ulcerated. Submucosa shows reactive lymphoid aggregates. Muscularis propria shows chronic inflammatory cell infiltrate. " +
                "Serosa shows congested blood vessels.\n" +
                "No evidence of granuloma or atypia or malignancy noted in sections studied.",

            impression: "Chronic Appendicitis"
        }
    },

    // =========================================================
    // 23. ACUTE APPENDICITIS
    // =========================================================
    {
        id: "acute-appendicitis",
        name: "Acute Appendicitis",
        defaults: {
            natureOfSpecimen: "Appendicectomy for HPE",

            grossExamination:
                "Received in formalin appendix with mesoappendix. Appendix measuring 5.5 cm in length. " +
                "Mesoappendix measuring 4x1x0.5 cm. Tip is intact. External surface is congested. Cut surface shows patent lumen.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied show appendix comprised of mucosa, submucosa, muscularis propria and serosa. " +
                "Mucosa is focally ulcerated. Submucosa shows reactive lymphoid aggregates. Muscularis propria shows acute inflammatory cell infiltrate " +
                "predominantly composed of neutrophils and eosinophils. Serosa and periappendiceal tissue show congested blood vessels and acute inflammatory cell infiltrate.\n" +
                "No evidence of granuloma or atypia or malignancy noted in sections studied.",

            impression: "Acute Appendicitis with Periappendicitis"
        }
    },

    // =========================================================
    // 24. MEDULLOBLASTOMA
    // =========================================================
    {
        id: "medulloblastoma",
        name: "Medulloblastoma",
        defaults: {
            natureOfSpecimen: "Excised Tissue specimen for HPE",

            grossExamination:
                "Received in formalin single grey white to grey brown soft tissue measuring 1.5x1x0.5 cm.\n" +
                "(Tissue processed entirely)",

            microscopicExamination:
                "Sections studied show moderately cellular tumor arranged in streaming pattern and at places pseudo-rosette pattern against fibrillary background. " +
                "The individual tumor cells are round to spindle cells having high N:C ratio with hyperchromatic, pleomorphic nuclei and scant cytoplasm. " +
                "Focal area of hemorrhage with congested blood vessels are seen.\n" +
                "No mitosis / microvascular proliferation / bizarre cells seen in the sections studied.\n" +
                "No native brain parenchymal tissue seen in the sections studied.",

            impression:
                "Excised tissue specimen – Histomorphological features are suggestive of Medulloblastoma."
        }
    },

    // =========================================================
    // 25. UTERUS WITH CERVIX + BILATERAL FALLOPIAN TUBES
    // =========================================================
    {
        id: "uterus-cervix-bilateral-fallopian-tubes",
        name: "Uterus With Cervix With Bilateral Fallopian Tubes",
        defaults: {
            natureOfSpecimen: "Hysterectomy with bilateral salpingectomy specimen for HPE",

            grossExamination:
                "Received hysterectomy specimen comprised of already cut open uterus with cervix with attached bilateral fallopian tubes " +
                "altogether measures 10x7.5x3.5 cm. Uterus with cervix measures 10x6.5x3.5 cm. Endometrial cavity and endocervical canal measures " +
                "4 cm and 3 cm respectively. Endometrial thickness and myometrial thickness measures 0.4 cm and 1 cm respectively. " +
                "Right and Left Fallopian tubes measures 1.8 cm and 1 cm respectively. Cut section shows dilated lumen filled with serous fluid.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied from uterus with cervix and bilateral fallopian tubes show:\n" +
                "Endometrium: shows few round to oval endometrial glands lined by tall columnar cells. Stroma is spindly compact.\n" +
                "Myometrium: Unremarkable\n" +
                "Cervix: Chronic papillary endocervicitis\n" +
                "Bilateral Fallopian tubes: Both fallopian tubes shows flattened and reduced mucosal plicae, lined by tall columnar epithelium. " +
                "The wall shows congested and dilated blood vessels\n" +
                "No evidence of atypia or malignancy noted in sections studied.",

            impression:
                "Endometrium: Proliferative phase\n" +
                "Myometrium: Unremarkable\n" +
                "Cervix: Chronic papillary endocervicitis\n" +
                "Bilateral Fallopian tubes: Hydrosalpinx"
        }
    },

    // =========================================================
    // 26. FALLopian TUBE
    // =========================================================
    {
        id: "fallopian-tube-confirmed",
        name: "Fallopian Tube",
        defaults: {
            natureOfSpecimen: "Bilateral fallopian tubes for HPE",

            grossExamination:
                "Received two grey brown, tubular, soft tissues measuring 2 cm and 1.8 cm in length. " +
                "External surface is unremarkable. Cut surface shows patent lumen.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied from bilateral fallopian tubes show normal histology.\n" +
                "No evidence of granuloma/ fungus/ atypia or malignancy noted in sections studied.",

            impression: "Bilateral Fallopian tubes- Confirmed"
        }
    },

    // =========================================================
    // 27. BONE MARROW BIOPSY - INADEQUATE
    // =========================================================
    {
        id: "bone-marrow-inadequate",
        name: "Bone Marrow Biopsy - Inadequate",
        defaults: {
            natureOfSpecimen: "Bone marrow biopsy for HPE",

            grossExamination:
                "Received multiple, very tiny bony cores altogether measuring 0.2x0.1x0.1cm.\n" +
                "(Tissue processed entirely)",

            microscopicExamination:
                "Sections studied from totally submitted very tiny biopsy show 3-4 bony trabeculae with 1-2 marrow spaces showing hypocellular marrow. " +
                "Sections studied reveal:\n" +
                "Erythroid series: Markedly suppressed\n" +
                "Myeloid series: Markedly suppressed\n" +
                "Megakaryocyte series: Markedly suppressed\n" +
                "Focal sheets of histiocytes along with occasional histiocyte showing phagocytosis noted.\n" +
                "No evidence of granuloma/ fungus/ atypia or malignancy noted in sections studied.",

            impression: "Bone Marrow Biopsy: Inadequate for opinion."
        }
    },

    // =========================================================
    // 28. EPIDERMOID CYST
    // =========================================================
    {
        id: "epidermoid-cyst",
        name: "Epidermoid Cyst",
        defaults: {
            natureOfSpecimen: "Excised Swelling over Right eye on lateral aspect HPE",

            grossExamination:
                "Received in formalin single skin covered soft tissue measuring 1.8x0.5x0.5 cm. " +
                "Cut surface shows a cyst measuring 1x0.8 cms, filled pultaceous material.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied show skin covered tissue with unremarkable epidermis. Dermis shows a fibrocollagenous cyst wall " +
                "lined by stratified squamous epithelium with preserved granular layer. Lumen of the cyst is filled with lamellated keratin. " +
                "Also seen unremarkable hair follicles and eccrine glands within superficial dermis.\n" +
                "No evidence of atypia or malignancy noted in the sections studied.",

            impression: "Excised Swelling over Right eye on lateral aspect - Epidermoid Cyst"
        }
    },

    // =========================================================
    // 29. OVARIAN CYST
    // =========================================================
    {
        id: "ovarian-cyst",
        name: "Ovarian Cyst",
        defaults: {
            natureOfSpecimen: "Excised Left Para ovarian cyst for HPE.",

            grossExamination:
                "Received in formalin single ovarian cyst along with separately sent single fallopian tube. " +
                "Ovarian cyst measures 6x5x3 cm and weighs approximately 50 gm. Capsule is intact, shiny, translucent. " +
                "On cut open the cyst, clear serous fluid oozed out. No solid areas or papillary excrescences are noted on gross examination. " +
                "Separately sent fallopian tube measures 4 cm in length. External surface is congested. Cut surface shows patent lumen.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied from ovarian cyst (1,2,3) show a fibrocollagenous cyst wall lined by cuboidal to columnar epithelium. " +
                "At places Walthard cell rests are noted.\n" +
                "Section studied from fallopian tube (4) shows normal histology.\n" +
                "No evidence of cytological atypia or malignancy noted in the sections studied.",

            impression:
                "Excised Left Para ovarian cyst- Histomorphological features are consistent with\n" +
                "Benign Simple Cyst."
        }
    },

    // =========================================================
    // 30. PHYLLODES
    // =========================================================
    {
        id: "phyllodes",
        name: "Phyllodes",
        defaults: {
            natureOfSpecimen: "Right Simple Mastectomy for HPE",

            grossExamination:
                "Received two grey white to grey brown soft to firm tissue masses, one measuring 4 × 2 × 1.5 cm " +
                "and another 2.5 × 1.5 × 1.2 cm. Cut surface is greyish white, homogeneous with congestion.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied from breast show a well circumscribed biphasic fibroepithelial lesion composed of epithelial and stromal components. " +
                "There is stromal hyperplasia with moderate stromal cellularity, forming characteristic leaf-like fronds with subepithelial stromal accentuation. " +
                "The stromal cells are oval to spindle-shaped having bland spindle shaped nuclei. Mitotic activity: 2-3/10hpf. " +
                "Focally, the stroma is fibromyxoid and shows areas of cystic and hyaline degeneration along with areas of hemorrhage. " +
                "All margins are unremarkable. Sections from the nipple-areola complex and adjacent breast parenchyma are unremarkable.",

            impression:
                "Right Simple Mastectomy – Histomorphological features are suggestive of Benign Phyllodes."
        }
    },

    // =========================================================
    // 31. ANGIOFIBROMA
    // =========================================================
    {
        id: "angiofibroma",
        name: "Angiofibroma",
        defaults: {
            natureOfSpecimen: "Excised Right Vulval mass for HPE",

            grossExamination:
                "Received in formalin single grey white well circumscribed firm tissue mass measuring 6.2x4.5x3 cm. " +
                "Cut surface is solid, grey white homogenous.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied shows a well circumscribed, vaguely lobulated tumour arranged in hypocellular and hypercellular areas set in collagenous and myxoid stroma. " +
                "Hypercellular areas show spindle cells arranged in short fascicles, bundles and around the blood vessels. " +
                "Individual tumor cells are bland spindle to ovoid having pale eosinophilic cytoplasm. Multiple thin-walled blood vessels noted throughout the tumor. " +
                "Perivascular collagen deposition and marked hyalinization of blood vessels is noted.\n" +
                "No evidence of nuclear hyperchromasia or cytological atypia or malignancy noted in the sections studied.",

            impression:
                "Excised Right Vulval mass- Histomorphological features are suggestive of Angiofibroma"
        }
    },

    // =========================================================
    // 32. LYMPH NODE BIOPSY
    // =========================================================
    {
        id: "lymph-node-biopsy",
        name: "Lymph Node Biopsy",
        defaults: {
            natureOfSpecimen: "Lymph node Biopsy for HPE (Site not mentioned)",

            grossExamination:
                "Received single grey brown soft tissue measuring 1x 0.5x0.2 cm. " +
                "Cut surface is grey brown.\n" +
                "(Tissue processed entirely)",

            microscopicExamination:
                "Sections studied show part of lymph node with preserved architecture covered by fibrous capsule. " +
                "The cortex shows variable sized lymphoid follicles, few with reactive germinal centres. " +
                "Adjacent fibroadipose tissue shows extensive foci of chronic inflammatory cell infiltrate.\n" +
                "No evidence of caseous necrosis/ granuloma/ fungus/ atypia or malignancy noted in present sections studied.",

            impression:
                "Lymph node biopsy (Site not mentioned) – Histomorphological features are suggestive of Reactive Lymphadenitis"
        }
    },

    // =========================================================
    // 33. TESTIS
    // =========================================================
    {
        id: "testis",
        name: "Testis",
        defaults: {
            natureOfSpecimen: "Left testis for HPE",

            grossExamination:
                "Received left orchidectomy specimen measuring 9x4.5x3 cm. Testis measures 6x4.5x2.5 cm. " +
                "Spermatic cord measuring 5.5cm in length. External surface is congested. On cutting open purulent material oozed out. " +
                "No viable testicular tissue noted on gross examination.\n" +
                "(Representative sections submitted)",

            microscopicExamination:
                "Sections studied show testicular parenchyma, epididymis and rete testis replaced by dense and diffuse mixed inflammatory cell infiltrate " +
                "comprising of sheets of foamy macrophages, neutrophils and lymphocytes. Foci of necrosis and hemorrhage are also seen. " +
                "The paratesticular adipose tissue shows a similar dense mixed inflammatory cell infiltrate with areas of necrosis. " +
                "Section from the spermatic cord shows unremarkable vas deferens.\n" +
                "No evidence of fungus, intratubular germ cell neoplasia, atypia or malignancy seen in the sections studied.",

            impression:
                "Left Orchidectomy- Histomorphological features are suggestive of Acute on Chronic Xanthogranulomatous Orchitis"
        }
    },

    // =========================================================
    // 34. LOBULAR CAPILLARY HEMANGIOMA
    // =========================================================
    {
        id: "lobular-capillary-hemangioma",
        name: "Lobular Capillary Hemangioma",
        defaults: {
            natureOfSpecimen: "Excised swelling over Right Cheek for HPE",

            grossExamination:
                "Received three grey brown skin covered tissue bits altogether measuring 1x0.5x0.3cm.\n" +
                "(Tissue processed entirely)",

            microscopicExamination:
                "Sections studied show skin lined by epidermis with dermis. Epidermis is lined by hyperkeratotic and acanthotic stratified squamous epithelium. " +
                "The dermis shows fibrocollagenous stroma containing ill-defined lobules of numerous congested small capillary-sized blood vessels lined by flattened endothelial cells " +
                "and separated by fibrous septa. Foci of hemorrhage noted. Adjacent adnexa is unremarkable.\n" +
                "No evidence of cytological atypia or malignancy is noted in the sections studied.",

            impression:
                "Excised swelling over Right Cheek – Histomorphological features are suggestive of Lobular Capillary Hemangioma."
        }
    },

    // =========================================================
    // 35. CHOLESTEATOMA
    // =========================================================
    {
        id: "cholesteatoma",
        name: "Cholesteatoma",
        defaults: {
            natureOfSpecimen: "Excised tissue from Right ear for HPE.",

            grossExamination:
                "Received multiple greyish white soft to firm tissue bits altogether measuring 0.5x0.3x0.2cm.\n" +
                "(Tissue processed entirely)",

            microscopicExamination:
                "Sections studied show fragmented sac like tissue lined by stratified squamous epithelium with lamellated flakes of keratin. " +
                "Anucleated squames and foci of calcification noted.\n" +
                "No evidence of atypia or malignancy noted in sections studied.",

            impression:
                "Excised tissue from Right ear cholesteatoma – Histomorphological features are consistent with Cholesteatoma"
        }
    },

    // =========================================================
    // 36. NASAL POLYP
    // =========================================================
    {
        id: "nasal-polyp",
        name: "Nasal Polyp",
        defaults: {
            natureOfSpecimen: "Excised Left Nasal polypoidal mass for HPE",

            grossExamination:
                "Received single grey white polypoidal soft tissue measuring 2x1x0.5cm. " +
                "Cut surface is grey white, translucent and focally congested.\n" +
                "(Tissue processed entirely)",

            microscopicExamination:
                "Sections studied show tissue lined by focally ulcerated respiratory epithelium. " +
                "Subepithelium shows dense and diffuse mixed inflammatory cell infiltrate predominantly composed of plasma cells, eosinophils, lymphocytes " +
                "and few neutrophils along with congested dilated blood vessels in loose fibromyxoid stroma. Plasma cells show reactive change. " +
                "Foci of necrosis seen.\n" +
                "No evidence of granuloma, fungus, atypia or malignancy noted in sections studied.",

            impression:
                "Excised Left Nasal mass - Histomorphological features are suggestive of Chronic Rhinosinusitis with Reactive Plasmacytosis"
        }
    }
];