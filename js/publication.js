const underlineIdx = {
  CONFERENCE: 0,
  JOURNAL: 1,
}
// FIXME store the current underline idx as global variable
let current = underlineIdx.CONFERENCE;

const confAbbr = {
  APSIPA: "Asia-Pacific Signal and Information Processing Association (APSIPA)",
  ASRU: "IEEE Automatic Speech Recognition and Understanding (ASRU)",
  BIGMM: "IEEE International Conference on Multimedia Big Data (BigMM)",
  BIOCAS: "Biomedical Circuits and Systems Conference (BioCAS)",
  COCOSDA: "International Committee for Co-ordination and Standardisation of Speech Databases (COCOSDA)",
  CVPR: "Computer Vision and Pattern Recognition (CVPR)",
  DCASE: "Detection and Classification of Acoustic Scenes and Events (DCASE)",
  GLOBALSIP: "IEEE Global Conference on Signal and Information Processing (GlobalSIP)",
  ICASSP: "IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)",
  ICCE: "IEEE International Conference on Consumer Electronics (ICCE)",
  ICDM: "IEEE International Conference on Data Mining (ICDM)",
  IJCNLP: "International Joint Conference on Natural Language Processing (IJCNLP)",
  IJCNN: "International Joint Conference on Neural Networks (IJCNN)",
  INTERSPEECH: "Inerspeech",
  ISCAS: "IEEE International Symposium on Circuits & Systems (ISCAS)",
  ISCE: "IEEE International Symposium on Consumer Electronics (ISCE)",
  ISCSLP: "The International Symposium on Chinese Spoken Language Processing (ISCSLP)",
  ISIC: "The International Symposium on Integrated Circuits (ISIC)",
  IUCS: "International Universal Communication Symposium (IUCS)",
  JASA: "The Journal of the Acoustical Society of America (JASA)",
  MLSP: "IEEE International Workshop on Machine Learning for Signal Processing (MLSP)",
  PNC: "Pacific Neighborhood Consortium (PNC) Annual Conference and Joint Meetings",
}

// array of journals, add paper of journal here!
let journals = [{
    "imgPath": "img/journal/tsao2005segmental.png",
    "filePath": "paper/journal/tsao2005segmental.pdf",
    "year": 2005,
    "name": "Segmental Eigenvoice with Delicate Eigenspace for Improved Speaker Adaptation.",
    "author": "Y. Tsao, S.-M. Lee, and L.-S. Lee",
    "conference": "IEEE Transactions on Speech and Audio Processing",
  }, {
    "imgPath": "img/journal/tsao2009ensemble.png",
    "filePath": "paper/journal/tsao2009ensemble.pdf",
    "year": 2009,
    "name": "An Ensemble Speaker and Speaking Environment Modeling Approach to Robust Speech Recognition.",
    "author": "Y. Tsao and C.-H. Lee",
    "conference": "IEEE Transactions on Audio, Speech and Language Processing",
  }, {
    "imgPath": "img/journal/lai2013study.png",
    "filePath": "paper/journal/lai2013study.pdf",
    "year": 2013,
    "name": "A Study of Adaptive WDRC in Hearing Aids under Noisy Conditions.",
    "author": "Y.-H. Lai, Y. Tsao, and F. Chen",
    "conference": "International Journal of Speech & Language Pathology and Audiology",
  }, {
    "imgPath": "img/journal/tsao2014map.png",
    "filePath": "paper/journal/tsao2014map.pdf",
    "year": 2014,
    "name": "A MAP-based Online Estimation Approach to Ensemble Speaker and Speaking Environment.",
    "author": "Y. Tsao, S. Matsuda, C. Hori, H. Kashioka, and C.-H. Lee",
    "conference": "IEEE Transactions on Audio, Speech and Language Processing",
  }, {
    "imgPath": "img/journal/tsao2014incorporating.png",
    "filePath": "paper/journal/tsao2014incorporating.pdf",
    "year": 2014,
    "name": "Incorporating Local Information of the Acoustic Environments to MAP-based Feature Compensation and Acoustic Model Adaptation.",
    "author": "Y. Tsao, X. Lu, P. Dixon, T.-y. Hu, S. Matsuda, and C. Hori",
    "conference": "Computer Speech and Language",
  }, {
    "imgPath": "img/journal/tsao2014variable.png",
    "filePath": "paper/journal/tsao2014variable.pdf",
    "year": 2014,
    "name": "Variable Selection Linear Regression for Robust Speech Recognition.",
    "author": "Y. Tsao, T.-y. Hu, S. Sakti, S. Nakamura, and L.-s. Lee",
    "conference": "IEICE Transactions on Information and Systems",
  }, {
    "imgPath": "img/journal/tsao2015acoustic.png",
    "filePath": "paper/journal/tsao2015acoustic.pdf",
    "year": 2015,
    "name": "Acoustic Echo Cancellation Using a Vector-Space-Based Adaptive Filtering Algorithm.",
    "author": "Y. Tsao, S.-H. Fang, and Y. Hsiao",
    "conference": "IEEE Signal Processing Letters",
  }, {
    "imgPath": "img/journal/tsao2015ensemble.png",
    "filePath": "paper/journal/tsao2015ensemble.pdf",
    "year": 2015,
    "name": "Ensemble Environment Modeling using Affine Transform Group.",
    "author": "Y. Tsao, P. Lin, T.-y. Hu, and X. Lu",
    "conference": "Speech Communication",
  }, {
    "imgPath": "img/journal/lai2015effects.png",
    "filePath": "paper/journal/lai2015effects.pdf",
    "year": 2015,
    "name": "Effects of Adaptation Rate and Noise Suppression on the Intelligibility of Compressed-Envelope Based Speech.",
    "author": "Y.-H. Lai, Y. Tsao, F. Chen",
    "conference": "PLoS ONE",
  }, {
    "imgPath": "img/journal/li2015rapid.png",
    "filePath": "paper/journal/li2015rapid.pdf",
    "year": 2015,
    "name": "Rapid Converging M-max Partial Update Least Mean Square Algorithms with New Variable Step-size Methods.",
    "author": "Y.-J, Lee, Y.-R. Chien, and Y. Tsao",
    "conference": "IEICE Transaction on Communications",
  }, {
    "imgPath": "img/journal/hsu2015robust.png",
    "filePath": "paper/journal/hsu2015robust.pdf",
    "year": 2015,
    "name": "Robust Voice Activity Detection Algorithm Based on Feature of Frequency Modulation of Harmonics and Its DSP Implementation.",
    "author": "C.-C. Hsu, K.-M. Cheong, T.-S. Chi, and Y. Tsao",
    "conference": "IEICE Transactions on Information and Systems",
  }, {
    "imgPath": "img/journal/lin2015smartphone.png",
    "filePath": "paper/journal/lin2015smartphone.pdf",
    "year": 2015,
    "name": "A Smartphone-Based Remote Microphone Hearing Assistive System Using Wireless Technologies.",
    "author": "Y.-C. Lin, Y.-H. Lai, H.-W. Chang, Y. Tsao, Y.-p. Chang, and R. Y. Chang",
    "conference": "IEEE Systems Journal",
  }, {
    "imgPath": "img/journal/fang2015compensating.png",
    "filePath": "paper/journal/fang2015compensating.pdf",
    "year": 2015,
    "name": "Compensating for Orientation Mismatch in Robust WiFi Localization Using Histogram Equalization.",
    "author": "S.-H. Fang, C.-H. Wang, and Y. Tsao",
    "conference": "IEEE Transactions on Vehicular Technology",
  }, {
    "imgPath": "img/journal/tsao2016generalized.png",
    "filePath": "paper/journal/tsao2016generalized.pdf",
    "year": 2016,
    "name": "Generalized Maximum a Posteriori Spectral Amplitude Estimation for Speech Enhancement.",
    "author": "Y. Tsao and Y.-H. Lai",
    "conference": "Speech Communication",
  }, {
    "imgPath": "img/journal/lin2016maximum.png",
    "filePath": "paper/journal/lin2016maximum.pdf",
    "year": 2016,
    "name": "Maximum Entropy Learning with Deep Belief Networks.",
    "author": "P. Lin, S.-W. Fu, S.-S.Wang, Y.-H. Lai, and Y. Tsao",
    "conference": "Entropy",
  }, {
    "imgPath": "img/journal/chen2016modeling.png",
    "filePath": "paper/journal/chen2016modeling.pdf",
    "year": 2016,
    "name": "Modeling Speech Intelligibility with Recovered Envelope from Temporal Fine Structure Stimulus.",
    "author": "F. Chen, Y. Tsao, and Y.-H. Lai",
    "conference": "Speech Communication",
  }, {
    "imgPath": "img/journal/wang2016wavelet.png",
    "filePath": "paper/journal/wang2016wavelet.pdf",
    "year": 2016,
    "name": "Wavelet Speech Enhancement based on Nonnegative Matrix Factorization.",
    "author": "S.-S. Wang, A. Chern, Y. Tsao, J.-w. Hung, X. Lu, Y.-H. Lai, B. Su",
    "conference": "IEEE Signal Processing Letters",
  }, {
    "imgPath": "img/journal/fang2016transportation.png",
    "filePath": "paper/journal/fang2016transportation.pdf",
    "year": 2016,
    "name": "Transportation Modes Classification Using Sensors on Smartphones.",
    "author": "S.-H. Fang , H.-H. Liao , Y.-X. Fei , K.-H. Chen , J.- W. Huang , Y.-D. Lu and Y. Tsao",
    "conference": "Sensors",
  }, {
    "imgPath": "img/journal/wang2016auditory.png",
    "filePath": "paper/journal/wang2016auditory.pdf",
    "year": 2016,
    "name": "Auditory Perception, Suprasegmental Speech Processing, and Vocabulary Development in Chinese Preschoolers.",
    "author": "H.-L. S. Wang, I-C. Chen, C.-H. Chiang, Y.-H. Lai, and Y. Tsao",
    "conference": "Perceptual and Motor Skills",
  }, {
    "imgPath": "img/journal/fang2016channel.png",
    "filePath": "paper/journal/fang2016channel.pdf",
    "year": 2016,
    "name": "Channel State Reconstruction Using Multilevel Discrete Wavelet Transform for Improved Fingerprinting-Based Indoor Localization.",
    "author": "S.-H. Fang, W.-H. Chang, Y. Tsao, H.-C. Shih, and C. Wang",
    "conference": "IEEE Sensors Journal",
  }, {
    "imgPath": "img/journal/guan2016assessing.png",
    "filePath": "paper/journal/guan2016assessing.pdf",
    "year": 2016,
    "name": "Assessing the Perceptual Contributions of Level-dependent Segments to Sentence Intelligibility.",
    "author": "T. Guan, G.-x. Chu, Y. Tsao, F. Chen",
    "conference": confAbbr.JASA,
  }, {
    "imgPath": "img/journal/fu2016joint.png",
    "filePath": "paper/journal/fu2016joint.pdf",
    "year": 2016,
    "name": "Joint Dictionary Learning-based Non-Negative Matrix Factorization for Voice Conversion to Improve Speech Intelligibility After Oral Surgery.",
    "author": "S.-W. Fu, P.-C. Li, Y.-H. Lai, C.-C. Yang, L.-C. Hsieh, and Y. Tsao",
    "conference": "IEEE Transactions on Biomedical Engineering",
  }, {
    "imgPath": "img/journal/lee2016personalizing.png",
    "filePath": "paper/journal/lee2016personalizing.pdf",
    "year": 2016,
    "name": "Personalizing Recurrent Neural Network based Language Model by Social Network.",
    "author": "H.-y. Lee, B.-H. Tseng, T.-H. Wen, and Y. Tsao",
    "conference": "IEEE Transactions on Audio, Speech and Language Processing",
  }, {
    "imgPath": "img/journal/chen2017s1.png",
    "filePath": "paper/journal/chen2017s1.pdf",
    "year": 2017,
    "name": "S1 and S2 Heart Sound Recognition using Deep Neural Networks.",
    "author": "T.-E. Chen, S.-I Yang, L.-T. Ho, K.-H. Tsai, Y.-H. Chen, Y.-F. Chang, Y.-H. Lai, S.-S. Wang, Y. Tsao*, and C.-C. Wu",
    "conference": "IEEE Transactions on Biomedical Engineering",
  }, {
    "imgPath": "img/journal/chern2017smartphone.png",
    "filePath": "paper/journal/chern2017smartphone.pdf",
    "year": 2017,
    "name": "A Smartphone-Based Multi-Functional Hearing Assistive System to Facilitate Speech Recognition in the Classroom.",
    "author": "A. Chern, Y.-H. Lai, Y.-p. Chang, Y. Tsao, R. Y. Chang, and H.-W. Chang",
    "conference": "IEEE Access",
  }, {
    "imgPath": "img/journal/lin2017improving.png",
    "filePath": "paper/journal/lin2017improving.pdf",
    "year": 2017,
    "name": "Improving Biodiversity Assessment via Unsupervised Separation of Biological Sounds from Long-duration Recordings.",
    "author": "T.-H. Lin, S.-H. Fang, and Y, Tsao",
    "conference": "Scientific Reports",
  }, {
    "imgPath": "img/journal/lu2017regularization.png",
    "filePath": "paper/journal/lu2017regularization.pdf",
    "year": 2017,
    "name": "Regularization of Neural Network Model with Distance Metric Learning for I-vector based Spoken Language Identification.",
    "author": "X. Lu, P. Shen, Y. Tsao, and H. Kawai",
    "conference": "Computer Speech and Language",
  }, {
    "imgPath": "img/journal/lai2017deep.png",
    "filePath": "paper/journal/lai2017deep.pdf",
    "year": 2017,
    "name": "A Deep Denoising Autoencoder Approach to Improving the Intelligibility of Vocoded Speech in Cochlear Implant Simulation.",
    "author": "Y.-H. Lai, F. Chen, S.-S. Wang, X. Lu, Y. Tsao, and C.-H. Lee",
    "conference": "IEEE Transactions on Biomedical Engineering",
  }, {
    "imgPath": "img/journal/hsiao2017toward.png",
    "filePath": "paper/journal/hsiao2017toward.pdf",
    "year": 2017,
    "name": "Toward Automating Oral Presentation Scoring during Principal Certification Program using Audio-Video Low-level Behavior Profiles.",
    "author": "S.-W. Hsiao, H.-C. Sun, M.-C. Hsieh, M.-H. Tsai, Y. Tsao, and C.-C. Lee",
    "conference": "IEEE Transactions on Affective Computing",
  }, {
    "imgPath": "img/journal/chen2017effects.png",
    "filePath": "paper/journal/chen2017effects.pdf",
    "year": 2017,
    "name": "Effects of Noise Suppression and Envelope Dynamic Range Compression on the Intelligibility of Vocoded Sentences for a Tonal Language.",
    "author": "F. Chen, D. Zheng, Y. Tsao",
    "conference": confAbbr.JASA,
  }, {
    "imgPath": "img/journal/fang2017learning.png",
    "filePath": "paper/journal/fang2017learning.pdf",
    "year": 2017,
    "name": "Learning Transportation Modes from Smartphone Sensors Based on Deep Neural Network.",
    "author": "S.-H. Fang, Y.-X. Fei, Z. Xu, and Y. Tsao",
    "conference": "IEEE Sensors Journal",
  }, {
    "imgPath": "img/journal/hussain2017experimental.png",
    "filePath": "paper/journal/hussain2017experimental.pdf",
    "year": 2017,
    "name": "Experimental Study on Extreme Learning Machine Applications for Speech Enhancement.",
    "author": "T. Hussain, S. M. Siniscalchi, C.-C. Lee, S.-S. Wang, Y. Tsao and W.-H. Liao",
    "conference": "IEEE Access",
  }, {
    "imgPath": "img/journal/lin2017multi.png",
    "filePath": "paper/journal/lin2017multi.pdf",
    "year": 2017,
    "name": "Multi-style Learning with Denoising Autoencoders for Acoustic Modeling in the Internet of Things (IoT).",
    "author": "P. Lin, D. Lyu, F. Chen, S.-S. Wang, and Y. Tsao",
    "conference": "Computer Speech and Language",
  }, {
    "imgPath": "img/journal/torres2018off.png",
    "filePath": "paper/journal/torres2018off.pdf",
    "year": 2018,
    "name": "Off-Line Evaluation of Mobile-Centric Indoor Positioning Systems: The Experiences from the 2017 IPIN Competition.",
    "author": "J. Torres-Sospedra et al.",
    "conference": "Sensors",
    "demo": ['journal test', 'audio/test.wav']
  }, {
    "imgPath": "img/journal/lai2018deep.png",
    "filePath": "paper/journal/lai2018deep.pdf",
    "year": 2018,
    "name": "Deep Learning based Noise Reduction Approach to Improve Speech Intelligibility for Cochlear Implant Recipients.",
    "author": "Y.-H. Lai, Y. Tsao, X. Lu, F. Chen, Y.-T. Su, K.-C. Chen, Y.-H. Chen, L.-C. Chen, P.-H. Li, and C.-H. Lee",
    "conference": "Ear and Hearing",
  }, {
    "imgPath": "img/journal/hwang2017locally.png",
    "filePath": "paper/journal/hwang2017locally.pdf",
    "year": 2017,
    "name": "Locally linear Embedding Based Post-filtering for Speech Enhancement.",
    "author": "H.-T. Hwang, Y.-C. Wu, S.-S. Wang, C.-C. Hsu, Y. Tsao, H.-M. Wang, Y.-R. Wang, and S.-H. Chen",
    "conference": "Journal of Information Science and Engineering",
  }, {
    "imgPath": "img/journal/hwang2017voice.png",
    "filePath": "paper/journal/hwang2017voice.pdf",
    "year": 2017,
    "name": "Voice Conversion based on Locally Linear Embedding.",
    "author": "H.-T. Hwang, Y.-C. Wu, Y.-H. Peng, C.-C. Hsu, Y. Tsao, H.-M. Wang, Y.-R. Wang, and S.-H. Chen",
    "conference": "Journal of Information Science and Engineering",
  }, {
    "imgPath": "img/journal/hou2018audio.png",
    "filePath": "paper/journal/hou2018audio.pdf",
    "year": 2018,
    "name": "Audio-visual Speech Enhancement using Multimodal Deep Convolutional Neural Networks.",
    "author": "J.-C. Hou, S.-S. Wang, Y.-H. Lai, Y. Tsao, H.-W. Chang, and H.-M. Wang",
    "conference": "IEEE Transactions on Emerging Topics in Computational Intelligence",
  }, {
    "imgPath": "img/journal/tsao2018adaptive.png",
    "filePath": "paper/journal/tsao2018adaptive.pdf",
    "year": 2018,
    "name": "Adaptive Noise Cancellation using Deep Cerebellar Model Articulation Controller.",
    "author": "Y. Tsao, H.-C. Chu, S.-H. Fang, J. Lee, and C.-M. Lin",
    "conference": "IEEE Access",
  }, {
    "imgPath": "img/journal/wang2018suppression.png",
    "filePath": "paper/journal/wang2018suppression.pdf",
    "year": 2018,
    "name": "Suppression by Selecting Wavelets for Feature Compression in Distributed Speech Recognition.",
    "author": "S.-S. Wang, P. Lin, Y. Tsao, J.-W. Hung, and B. Su",
    "conference": "IEEE Transactions on Audio, Speech and Language Processing",
  }, {
    "imgPath": "img/journal/fu2017end.png",
    "filePath": "paper/journal/fu2017end.pdf",
    "year": 2017,
    "name": "End-to-End Waveform Utterance Enhancement for Direct Evaluation Metrics Optimization by Fully Convolutional Neural Networks.",
    "author": "S.-W. Fu, T.-W. Wang, Y. Tsao, X. Lu, and H. Kawai",
    "conference": "IEEE Transactions on Audio, Speech and Language Processing",
  }, {
    "imgPath": "img/journal/fang2018detection.png",
    "filePath": "paper/journal/fang2018detection.pdf",
    "year": 2018,
    "name": "Detection of Pathological Voice Using Cepstrum Vectors: A Deep Learning Approach.",
    "author": "C.-T. Wang, F.-C. Lin, J.-Y. Chen, M.-J. Hsiao, S.-H. Fang, Y.-H. Lai, Y. Tsao",
    "conference": "Journal of Voice",
  }, {
    "imgPath": "img/journal/lin2018comparison.png",
    "filePath": "paper/journal/lin2018comparison.pdf",
    "year": 2018,
    "name": "Comparison of Passive Acoustic Soniferous Fish Monitoring With Supervised and Unsupervised Approaches.",
    "author": "T.-H. Lin, T. Akamatsu, and Y, Tsao",
    "conference": confAbbr.JASA,
  }
]

// array of papers, add paper of conference here!
let papers = [{
    "imgPath": "img/conference/tsao2001segmental.png",
    "filePath": "paper/conference/tsao2001segmental.pdf",
    "year": 2001,
    "name": "Segmental Eigenvoice for Rapid Speaker Adaptation.",
    "author": "Y. Tsao, S.-M. Lee, and L.-S. Lee",
    "conference": "Eurospeech",
  }, {
    "imgPath": "img/conference/tsao2005study.png",
    "filePath": "paper/conference/tsao2005study.pdf",
    "year": 2005,
    "name": "A Study on Separation between Acoustic Models and Its Applications.",
    "author": "Y. Tsao, J. Li, and C.-H. Lee",
    "conference": "Eurospeech",
  }, {
    "imgPath": "img/conference/ma2006study.png",
    "filePath": "paper/conference/ma2006study.pdf",
    "year": 2006,
    "name": "A Study on Detection Based Automatic Speech Recognition.",
    "author": "C. Ma, Y. Tsao, and C.-H. Lee",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/tsao2006vector.png",
    "filePath": "paper/conference/tsao2006vector.pdf",
    "year": 2006,
    "name": "A Vector Space Approach to Environment Modeling for Robust Speech Recognition.",
    "author": "Y. Tsao and C.-H. Lee",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/bromberg2007detection.png",
    "filePath": "paper/conference/bromberg2007detection.pdf",
    "year": 2007,
    "name": "Detection-based ASR In the Automatic Speech Attribute Transcription Project.",
    "author": "I. Bromberg, Q. Fu, J. Hou, J. Li, C. Ma, B. Mattews, A. Moreno-Daniel, J. Morris, S. M. Siniscalchi, Y. Tsao, and Y. Wang",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/tsao2007ensemble.png",
    "filePath": "paper/conference/tsao2007ensemble.pdf",
    "year": 2007,
    "name": "An Ensemble Modeling Approach to Joint Characterization of Speaker and Speaking Environments.",
    "author": "Y. Tsao and C.-H. Lee",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/tsao2007two.png",
    "filePath": "paper/conference/tsao2007two.pdf",
    "year": 2007,
    "name": "Two Extensions to Ensemble Speaker and Speaking Environment Modeling for Robust Automatic Speech Recognition.",
    "author": "Y. Tsao and C.-H. Lee",
    "conference": confAbbr.ASRU,
  }, {
    "imgPath": "img/conference/tsao2008improving.png",
    "filePath": "paper/conference/tsao2008improving.pdf",
    "year": 2008,
    "name": "Improving the Ensemble Speaker and Speaking Environment Modeling Approach by Enhancing the Precision of the Online Estimation Process.",
    "author": "Y. Tsao and C.-H. Lee",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/peng2008programmable.png",
    "filePath": "paper/conference/peng2008programmable.pdf",
    "year": 2008,
    "name": "A Programmable Analog Radial-Basis-Function Based Classifier.",
    "author": "S.-Y. Peng, Y. Tsao, P. E. Hasler, and D. V. Anderson",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/tsao2009ensemble.png",
    "filePath": "paper/conference/tsao2009ensemble.pdf",
    "year": 2009,
    "name": "Ensemble Speaker and Speaking Environment Modeling Approach with Advanced Online Estimation Process.",
    "author": "Y. Tsao, J. Li, and C.-H. Lee",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/matsuda2009study.png",
    "filePath": "paper/conference/matsuda2009study.pdf",
    "year": 2009,
    "name": "A Study on Soft Margin Estimation of Linear Regression Parameters for Speaker Adaptation.",
    "author": "S. Matsuda, Y. Tsao, J. Li, S. Nakamura, and C.-H. Lee",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/tsao2009soft.png",
    "filePath": "paper/conference/tsao2009soft.pdf",
    "year": 2009,
    "name": "Soft Margin Estimation on Improving Environment Structures for Ensemble Speaker and Speaking Environment Modeling.",
    "author": "Y. Tsao, J. Li, C.-H. Lee, and S. Nakamura",
    "conference": confAbbr.IUCS,
  }, {
    "imgPath": "img/conference/tsao2009map.png",
    "filePath": "paper/conference/tsao2009map.pdf",
    "year": 2009,
    "name": "MAP Estimation of Online Mapping Parameters in Ensemble Speaker and Speaking Environment Modeling.",
    "author": "Y. Tsao, S. Matsuda, S. Nakamura, and C.-H. Lee",
    "conference": confAbbr.ASRU,
  }, {
    "imgPath": "img/conference/tsao2010acoustic.png",
    "filePath": "paper/conference/tsao2010acoustic.pdf",
    "year": 2010,
    "name": "An Acoustic Segment Model Approach to Incorporating Temporal Information into Speaker Modeling for Text-Independent Speaker Recognition.",
    "author": "Yu Tsao, H. Sun, H. Li, and C.-H. Lee",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/li2010shrinkage.png",
    "filePath": "paper/conference/li2010shrinkage.pdf",
    "year": 2010,
    "name": "Shrinkage Model Adaptation in Automatic Speech Recognition.",
    "author": "J. Li, Y. Tsao, and C.-H. Lee",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/mushtaq2010particle.png",
    "filePath": "paper/conference/mushtaq2010particle.pdf",
    "year": 2010,
    "name": "A Particle Filter Feature Compensation Approach to Robust Speech Recognition.",
    "author": "A. Mushtaq, Y. Tsao, and C.-H. Lee",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/tsao2011sampling.png",
    "filePath": "paper/conference/tsao2011sampling.pdf",
    "year": 2011,
    "name": "A Sampling-based Environment Population Projection Approach for Rapid Acoustic Model Adaptation.",
    "author": "Y. Tsao, S. Matsuda, S. Sakai, R. Isotani, H. Kawai, and S. Nakamura",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/tsao2011increasing.png",
    "filePath": "paper/conference/tsao2011increasing.pdf",
    "year": 2011,
    "name": "Increasing Discriminative Capability on Map-based Mapping Function Estimation for Acoustic Model Adaptation.",
    "author": "Yu Tsao, R. Isotani, H. Kawai, and S. Nakamura",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/tsao2011incorporating.png",
    "filePath": "paper/conference/tsao2011incorporating.pdf",
    "year": 2011,
    "name": "Incorporating Regional Information to Enhance MAP-based Stochastic Feature Compensation for Robust Speech Recognition.",
    "author": "Yu Tsao, P. R. Dixon, C. Hori, and H. Kawai",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/huang2011feature.png",
    "filePath": "paper/conference/huang2011feature.pdf",
    "year": 2011,
    "name": "Feature Normalization and Selection for Robust Speaker State Recognition.",
    "author": "C.-L. Huang, Yu Tsao, and C. Hori",
    "conference": confAbbr.COCOSDA,
  }, {
    "imgPath": "img/conference/tsao2012linear.png",
    "filePath": "paper/conference/tsao2012linear.pdf",
    "year": 2012,
    "name": "A Linear Projection Approach to Environment Modeling for Robust Speech Recognition.",
    "author": "Yu Tsao, C.-L. Huang, S. Matsuda, C. Hori, and H. Kashioka",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/hu2012discriminative.png",
    "filePath": "paper/conference/hu2012discriminative.pdf",
    "year": 2012,
    "name": "Discriminative Fuzzy Clustering Maximum a Posterior Linear Regression for Speaker Adaptation.",
    "author": "T.-Y. Hu, Yu Tsao, and L.-S. Lee",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/hwang2012study.png",
    "filePath": "paper/conference/hwang2012study.pdf",
    "year": 2012,
    "name": "A Study of Mutual Information for GMM-Based Spectral Conversion.",
    "author": "H.-T. Hwang, Yu Tsao, H.-M. Wang, Y.-R. Wang, and S.-H. Chen",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/hwang2012exploring.png",
    "filePath": "paper/conference/hwang2012exploring.pdf",
    "year": 2012,
    "name": "Exploring Mutual Information for GMM-Based Spectral Conversion.",
    "author": "H.-T. Hwang, Yu Tsao, H.-M. Wang, Y.-R. Wang, and S.-H. Chen",
    "conference": confAbbr.ISCSLP,
  }, {
    "imgPath": "img/conference/lu2012acoustic.png",
    "filePath": "paper/conference/lu2012acoustic.pdf",
    "year": 2012,
    "name": "Acoustic Space Partition based on Broad Phonetic Class for Ensemble Acoustic Modeling.",
    "author": "X. Lu, Yu Tsao, S. Matsuda, C. Hori, and H. Kashioka",
    "conference": confAbbr.ISCSLP,
  }, {
    "imgPath": "img/conference/wang2012study.png",
    "filePath": "paper/conference/wang2012study.pdf",
    "year": 2012,
    "name": "A Study on Cepstral Subband Normalization for Robust ASR.",
    "author": "S.-S. Wang, J.-W. Hung, and Yu Tsao",
    "conference": confAbbr.ISCSLP,
  }, {
    "imgPath": "img/conference/jing2013sparse.png",
    "filePath": "paper/conference/jing2013sparse.pdf",
    "year": 2013,
    "name": "Sparse Maximum Entropy Deep Belief Nets.",
    "author": "How Jing and Yu Tsao",
    "conference": confAbbr.IJCNN,
  }, {
    "imgPath": "img/conference/wang2013filtering.png",
    "filePath": "paper/conference/wang2013filtering.pdf",
    "year": 2013,
    "name": "Filtering on the Temporal Probability Sequence in Histogram Equalization for Robust Speech Recognition.",
    "author": "Syu-Siang Wang, Yu Tsao, Jeih-weih Hung",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/su2013speech.png",
    "filePath": "paper/conference/su2013speech.pdf",
    "year": 2013,
    "name": "Speech Enhancement using Generalized Maximum a Posteriori Spectral Amplitude Estimator.",
    "author": "Yu-Cheng Su, Yu Tsao, Jung-En Wu, Fu-Rong Jean",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/lai2013evaluation.png",
    "filePath": "paper/conference/lai2013evaluation.pdf",
    "year": 2013,
    "name": "Evaluation of Generalized Maximum a Posteriori Spectral Amplitude (GMAPA) Speech Enhancement Algorithm in Hearing Aids.",
    "author": "Ying-Hui Lai, Yu-Cheng Su, Yu Tsao, Shuenn-Tsong Young",
    "conference": confAbbr.ISCE,
  }, {
    "imgPath": "img/conference/wen2013recurrent.png",
    "filePath": "paper/conference/wen2013recurrent.pdf",
    "year": 2013,
    "name": "Recurrent Neural Network Based Language Model Personalization by Social Network Crowdsourcing.",
    "author": "Tsung-Hsien Wen, Aaron Heidel, Hung-yi Lee, Yu Tsao and Lin-Shan Lee",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/hwang2013alleviating.png",
    "filePath": "paper/conference/hwang2013alleviating.pdf",
    "year": 2013,
    "name": "Alleviating the Over-Smoothing Problem in GMM-Based Voice Conversion with Discriminative Training.",
    "author": "Hsin-Te Hwang, Yu Tsao, Hsin-Min Wang, Yih-Ru Wang and Sin-Horng Chen",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/li2013investigation.png",
    "filePath": "paper/conference/li2013investigation.pdf",
    "year": 2013,
    "name": "An Investigation of Spectral Restoration Algorithms for Deep Neural Networks based Noise Robust Speech Recognition.",
    "author": "Bo Li, Yu Tsao and Khe Chai Sim",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/lee2013ensemble.png",
    "filePath": "paper/conference/lee2013ensemble.pdf",
    "year": 2013,
    "name": "Ensemble of Machine Learning and Acoustic Segment Model Techniques for Speech Emotion and Autism Spectrum Disorders Recognition.",
    "author": "Hung-yi Lee, Ting-yao Hu, How Jing, Yun-Fan Chang, Yu Tsao, Yu-Cheng Kao and Tsang-Long Pao",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/wang2013robust.png",
    "filePath": "paper/conference/wang2013robust.pdf",
    "year": 2013,
    "name": "Robust Wi-Fi Location Fingerprinting Against Device Diversity based on Spatial Mean Normalization.",
    "author": "C.-H. Wang, T.-W. Kao, S.-H. Fang, Y. Tsao, L.-C. Kuo, S.-W. Kao, and N.-C. Lin",
    "conference": confAbbr.APSIPA,
  }, {
    "imgPath": "img/conference/hwang2013incorporating.png",
    "filePath": "paper/conference/hwang2013incorporating.pdf",
    "year": 2013,
    "name": "Incorporating Global Variance in the Training Phase of GMM-based Voice Conversion.",
    "author": "H.-T. Hwang, Y. Tsao, H.-M. Wang, Y.-R. Wang, S.-H. Chen",
    "conference": confAbbr.APSIPA,
  }, {
    "imgPath": "img/conference/jing2013semantic.png",
    "filePath": "paper/conference/jing2013semantic.pdf",
    "year": 2013,
    "name": "Semantic Naïve Bayes Classifier for Document Classification.",
    "author": "H.-S. Lee, Y. Tsao, Y.-F. Chang, H.-M. Wang, and S.-K. Jeng",
    "conference": confAbbr.IJCNLP,
  }, {
    "imgPath": "img/conference/lee2014speaker.png",
    "filePath": "paper/conference/lee2014speaker.pdf",
    "year": 2014,
    "name": "Speaker Verification Using Kernel-Based Binary Classifiers with Binary Operation Derived Features.",
    "author": "H.-S. Lee, Y. Tsao, Y.-F. Chang, H.-M. Wang, and S.-K. Jeng",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/lu2014sparse.png",
    "filePath": "paper/conference/lu2014sparse.pdf",
    "year": 2014,
    "name": "Sparse Representation Based on a Bag of Spectral Exemplars for Acoustic Event Detection.",
    "author": "X. Lu, Yu Tsao, S. Matsuda, and C. Hori",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/fan2014speech.png",
    "filePath": "paper/conference/fan2014speech.pdf",
    "year": 2014,
    "name": "Speech Enhancement using Segmental Nonnegative Matrix Factorization.",
    "author": "H.-t. Fan, J.-w. Hung, X. Lu, S.-S. Wang, Yu Tsao",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/lin2014automatic.png",
    "filePath": "paper/conference/lin2014automatic.pdf",
    "year": 2014,
    "name": "Automatic Speech Recognition with Primarily Temporal Envelope Information.",
    "author": "P. Lin, F. Chen, S.-S. Wang, Y. Tsao and Y. H. Lai",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/jing2014ensemble.png",
    "filePath": "paper/conference/jing2014ensemble.pdf",
    "year": 2014,
    "name": "Ensemble of Machine Learning Algorithms for Cognitive and Physical Speaker Load Detection.",
    "author": "H. Jing, T.-Y. Hu, H.-S. Lee, W.-C. Chen, C.-C. Lee, Y. Tsao and H.-M. Wang",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/lee2014clustering.png",
    "filePath": "paper/conference/lee2014clustering.pdf",
    "year": 2014,
    "name": "Clustering-Based I-Vector Formulation for Speaker Recognition.",
    "author": "H.-S. Lee, Y. Tsao, H.-M. Wang and S.-K. Jen",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/lai2014adaptive.png",
    "filePath": "paper/conference/lai2014adaptive.pdf",
    "year": 2014,
    "name": "An Adaptive Envelope Compression Strategy for Speech Processing in Cochlear Implants.",
    "author": "Y. H. Lai, F. Chen, and Y. Tsao",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/wang2014acoustic.png",
    "filePath": "paper/conference/wang2014acoustic.pdf",
    "year": 2014,
    "name": "Acoustic Feature Conversion using a Polynomial based Feature Transferring Algorithm.",
    "author": "S.-S. Wang, P. Lin, D.-C. Lyu, Y. Tsao, H.-T. Hwang, B. Su and H.-M. Wang",
    "conference": confAbbr.ISCSLP,
  }, {
    "imgPath": "img/conference/lu2014spectral.png",
    "filePath": "paper/conference/lu2014spectral.pdf",
    "year": 2014,
    "name": "Spectral Patch Based Sparse Coding for Acoustic Event Detection.",
    "author": "X. Lu, Y. Tsao, P. Shen, and C. Hori",
    "conference": confAbbr.ISCSLP,
  }, {
    "imgPath": "img/conference/lu2014ensemble.png",
    "filePath": "paper/conference/lu2014ensemble.pdf",
    "year": 2014,
    "name": "Ensemble Modeling of Denoising Autoencoder for Speech Spectrum Restoration.",
    "author": "X. Lu, Y. Tsao, S. Matsuda, and C. Hori",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/chang2014robust.png",
    "filePath": "paper/conference/chang2014robust.pdf",
    "year": 2014,
    "name": "Robust Anchorperson Detection Based on Audio Streams using a Hybrid I-vector and DNN System.",
    "author": "Y.-F. Chang, P. Lin, S.-H. Cheng, K.-H. Chan, Y.-C. Zeng, C.-W. Liao, W.-T. Chang, Y.-C. Wang, Y. Tsao",
    "conference": confAbbr.APSIPA,
  }, {
    "imgPath": "img/conference/lai2014effect.png",
    "filePath": "paper/conference/lai2014effect.pdf",
    "year": 2014,
    "name": "Effect of Adaptive Envelope Compression in Simulated Electric Hearing in Reverberation.",
    "author": "Y.-H. Lai, F. Chen, and Y. Tsao",
    "conference": confAbbr.ISIC,
  }, {
    "imgPath": "img/conference/jing2014transfer.png",
    "filePath": "paper/conference/jing2014transfer.pdf",
    "year": 2014,
    "name": "A Transfer Probabilistic Collective Factorization Model to Handle Sparse Data in Collaborative Filtering.",
    "author": "H. Jing, A.-C. Liang, S.-D. Lin, and Y. Tsao",
    "conference": confAbbr.ICDM,
  }, {
    "imgPath": "img/conference/chen2015multimodal.png",
    "filePath": "paper/conference/chen2015multimodal.pdf",
    "year": 2015,
    "name": "Multimodal Arousal Rating using Unsupervised Fusion Technique.",
    "author": "W.-C. Chen, P.-T. Lai, Y. Tsao, and C.-C. Lee",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/lai2015discriminative.png",
    "filePath": "paper/conference/lai2015discriminative.pdf",
    "year": 2015,
    "name": "A Discriminative Post-filter for Speech Enhancement in Hearing Aids.",
    "author": "Y.-H. Lai, S.-S. Wang, P.-C. Li, and Yu Tsao",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/lin2015temporalinfo.png",
    "filePath": "paper/conference/lin2015temporalinfo.pdf",
    "year": 2015,
    "name": "Temporal Information in Tone Recognition.",
    "author": "P. Lin, S.-S. Wang, and Y. Tsao",
    "conference": confAbbr.ICCE,
  }, {
    "imgPath": "img/conference/lin2015speech.png",
    "filePath": "paper/conference/lin2015speech.pdf",
    "year": 2015,
    "name": "Speech Recognition with Temporal Neural Networks.",
    "author": "P. Lin, D.-C. Lyu, Y.-F. Chang, and Y. Tsao",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/lu2015sparse.png",
    "filePath": "paper/conference/lu2015sparse.pdf",
    "year": 2015,
    "name": "Sparse Representation with Temporal Max-Smoothing for Acoustic Event Detection.",
    "author": "X. Lu, P. Shen, Y. Tsao, C. Hori, H. Kawai",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/liu2015new.png",
    "filePath": "paper/conference/liu2015new.pdf",
    "year": 2015,
    "name": "A New Frequency Lowering Technique for Mandarin-Speaking Hearing Aid Users.",
    "author": "Y.-T. Liu, R. Y. Chang, Y. Tsao, and Y.-p. Chang",
    "conference": confAbbr.GLOBALSIP,
  }, {
    "imgPath": "img/conference/hwang2015probabilistic.png",
    "filePath": "paper/conference/hwang2015probabilistic.pdf",
    "year": 2015,
    "name": "A Probabilistic Interpretation for Artificial Neural Network-based Voice Conversion.",
    "author": "H.-T. Hwang, Y. Tsao, H.-M. Wang, Y.-R. Wang, and S.-H. Chen",
    "conference": confAbbr.APSIPA,
  }, {
    "imgPath": "img/conference/wang2015improving.png",
    "filePath": "paper/conference/wang2015improving.pdf",
    "year": 2015,
    "name": "Improving Denoising Auto-encoder Based Speech Enhancement With the Speech Parameter Generation Algorithm.",
    "author": "S.-S. Wang, H.-T. Hwang, Y.-H. Lai, Y. Tsao, X. Lu, H.-M. Wang, and B. Su",
    "conference": confAbbr.APSIPA,
  }, {
    "imgPath": "img/conference/lin2015temporal.png",
    "filePath": "paper/conference/lin2015temporal.pdf",
    "year": 2015,
    "name": "Temporal Alignment for Deep Neural Networks.",
    "author": "P. Lin, D.-C. Lyu, Y.-F. Chang, and Y. Tsao",
    "conference": confAbbr.GLOBALSIP,
  }, {
    "imgPath": "img/conference/lai2016improving_02.png",
    "filePath": "paper/conference/lai2016improving_02.pdf",
    "year": 2016,
    "name": "Improving the Performance of Noise Reduction in Hearing Aids Based on the Genetic Algorithm.",
    "author": "Ying-Hui Lai, Chien-Hsun Chen, Shih-Tsang Tang, Zong-Mu Yeh, and Yu Tsao",
    "conference": "IFMBE Proceedings 57",
  }, {
    "imgPath": "img/conference/wang2016temporal.png",
    "filePath": "paper/conference/wang2016temporal.pdf",
    "year": 2016,
    "name": "Temporal Modulation Spectral Restoration for Robust Speech Recognition.",
    "author": "S.-S. Wang and Y. Tsao",
    "conference": confAbbr.BIGMM,
  }, {
    "imgPath": "img/conference/yang2016speech.png",
    "filePath": "paper/conference/yang2016speech.pdf",
    "year": 2016,
    "name": "Speech Enhancement via Ensemble Modeling NMF Adaptation.",
    "author": "Jeremy Chiaming Yang, Syu-Siang Wang, Yu Tsao, and Jeih-weih Hung",
    "conference": confAbbr.ICCE,
  }, {
    "imgPath": "img/conference/wang2016leveraging.png",
    "filePath": "paper/conference/wang2016leveraging.pdf",
    "year": 2016,
    "name": "Leveraging Nonnegative Matrix Factorization in Processing the Temporal Modulation Spectrum for Speech Enhancement.",
    "author": "Syu-Siang Wang, Jeremy Chiaming Yang, Yu Tsao, and Jeih-weih Hung",
    "conference": confAbbr.ICCE,
  }, {
    "imgPath": "img/conference/liu2016nonnegative.png",
    "filePath": "paper/conference/liu2016nonnegative.pdf",
    "year": 2016,
    "name": "Nonnegative Matrix Factorization-based Frequency Lowering Technology for Mandarin-speaking Hearing Aid Users.",
    "author": "Y.-T. Liu, Y. Tsao, R. Y. Chang",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/wu2017track.png",
    "filePath": "paper/conference/wu2017track.pdf",
    "year": 2016,
    "name": "Track-clustering Error Evaluation for Track-based Multi-camera Tracking System Employing Human Re-identification.",
    "author": "C.-W. Wu, M.-T. Zhong, Y. Tsao, S.-W. Yang, Y.-K. Chen, and S.-Y. Chien",
    "conference": confAbbr.CVPR,
  }, {
    "imgPath": "img/conference/lu2016pair.png",
    "filePath": "paper/conference/lu2016pair.pdf",
    "year": 2016,
    "name": "Pair-wise Distance Metric Learning of Neural Network Model for Spoken Language Identification.",
    "author": "X. Lu, P. Shen, Y. Tsao, H. Kawai",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/fu2016snr.png",
    "filePath": "paper/conference/fu2016snr.pdf",
    "year": 2016,
    "name": "SNR-Aware Convolutional Neural Network Modeling for Speech Enhancement.",
    "author": "S.-W. Fu, Y. Tsao, X. Lu",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/lee2016minimization.png",
    "filePath": "paper/conference/lee2016minimization.pdf",
    "year": 2016,
    "name": "Minimization of Regression and Ranking Losses with Shallow Neural Networks on Automatic Sincerity Evaluation.",
    "author": "H.-S. Lee, Y. Tsao, C.-C. Lee, H.-M. Wang, W.-C. Lin, W.-C. Chen, S.-W. Hsiao, S.-K. Jeng",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/lai2016dcase.png",
    "filePath": "paper/conference/lai2016dcase.pdf",
    "year": 2016,
    "name": "DCASE Report for Task 3: Sound Event Detection in Real Life Audio.",
    "author": "Y.-H. Lai, C.-H. Wang, S.-Y. Hou, B.-Y. Chen, Y. Tsao, and Y.-W. Liu",
    "conference": confAbbr.DCASE,
  }, {
    "imgPath": "img/conference/wu2016locally.png",
    "filePath": "paper/conference/wu2016locally.pdf",
    "year": 2016,
    "name": "Locally Linear Embedding for Exemplar-Based Spectral Conversion.",
    "author": "Y.-C. Wu, H.-T. Hwang, C.-C. Hsu, Y. Tsao, H.-M. Wang",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/hsu2016incorporating.png",
    "filePath": "paper/conference/hsu2016incorporating.pdf",
    "year": 2016,
    "name": "Incorporating Local Environment Information with Ensemble Neural Networks to Robust Automatic Speech Recognition.",
    "author": "C.-Y. Hsu, R. E. Zezario, J.-C. Wang, X. Lu, and Y. Tsao",
    "conference": confAbbr.ISCSLP,
  }, {
    "imgPath": "img/conference/hsieh2016linear.png",
    "filePath": "paper/conference/hsieh2016linear.pdf",
    "year": 2016,
    "name": "A Linear Regression Model with Dynamic Pulse Transit Time Features for Noninvasive Blood Pressure Prediction.",
    "author": "Y.-Y. Hsieh, C.-D. Wu, Y. Tsao, and S.-S. Lu",
    "conference": confAbbr.BIOCAS,
  }, {
    "imgPath": "img/conference/lai2016improving_01.png",
    "filePath": "paper/conference/lai2016improving_01.pdf",
    "year": 2016,
    "name": "Improving the Performance of Speech Perception in Noisy Environment based on a FAME Strategy.",
    "author": "Y.-H. Lai, S.-S. Wang, Y.-T. Su, H.-C. Cheng, F. K. Fu, and Y. Tsao",
    "conference": confAbbr.ISCSLP,
  }, {
    "imgPath": "img/conference/hsu2016dictionary.png",
    "filePath": "paper/conference/hsu2016dictionary.pdf",
    "year": 2016,
    "name": "Dictionary Update for NMF-based Voice Conversion Using an Encoder-Decoder Network.",
    "author": "C.-C. Hsu, H.-T. Hwang, Y.-C. Wu, Y. Tsao, and H.-M. Wang",
    "conference": confAbbr.ISCSLP,
  }, {
    "imgPath": "img/conference/hsu2016voice.png",
    "filePath": "paper/conference/hsu2016voice.pdf",
    "year": 2016,
    "name": "Voice Conversion from Non-parallel Corpora Using Variational Auto-encoder.",
    "author": "C.-C. Hsu, H.-T. Hwang, Y.-C. Wu, Y. Tsao and H.-M. Wang",
    "conference": confAbbr.APSIPA,
  }, {
    "imgPath": "img/conference/hou2016audio.png",
    "filePath": "paper/conference/hou2016audio.pdf",
    "year": 2016,
    "name": "Audio-Visual Speech Enhancement using Deep Neural Networks.",
    "author": "J.-C. Hou, S.-S. Wang, Y.-H. Lai, J.-C. Lin, Y. Tsao, H.-W. Chang, and H.-M. Wang",
    "conference": confAbbr.APSIPA,
  }, {
    "imgPath": "img/conference/wu2017locally.png",
    "filePath": "paper/conference/wu2017locally.pdf",
    "year": 2017,
    "name": "A Locally Linear Embbeding Based Postfiltering Approach for Speech Enhancement.",
    "author": "Y.-C. Wu, H.-T. Hwang, S.-S. Wang, C.-C. Hsu, Y.-H. Lai, Y. Tsao, and H.-M. Wang",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/lee2017discriminative.png",
    "filePath": "paper/conference/lee2017discriminative.pdf",
    "year": 2017,
    "name": "Discriminative Autoencoders for Speaker Verification.",
    "author": "H.-S. Lee, Y.-D. Lu, C.-C. Hsu, Y. Tsao, H.-M. Wang, and S.-K. Jeng",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/lin2017object.png",
    "filePath": "paper/conference/lin2017object.pdf",
    "year": 2017,
    "name": "Object-based on-line video summarization for internet of video things.",
    "author": "S.-T. Lin, Y.-H. Liao, Y. Tsao, and S.-Y. Chien",
    "conference": confAbbr.ISCAS,
  }, {
    "imgPath": "img/conference/hsu2017voice.png",
    "filePath": "paper/conference/hsu2017voice.pdf",
    "year": 2017,
    "name": "Voice Conversion from Unaligned Corpora Using Variational Autoencoding Wasserstein Generative Adversarial Networks.",
    "author": "C.-C. Hsu, H.-T. Hwang, Y.-C. Wu, Y. Tsao, and H.-M. Wang",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/wu2017post.png",
    "filePath": "paper/conference/wu2017post.pdf",
    "year": 2017,
    "name": "A Post-filtering Approach Based on Locally Linear Embedding Difference Compensation for Speech Enhancement.",
    "author": "Y.-C. Wu, H.-T. Hwang, S.-S. Wang, C.-C. Hsu, Y. Tsao, and H.-M. Wang",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/wu2017wavelet.png",
    "filePath": "paper/conference/wu2017wavelet.pdf",
    "year": 2017,
    "name": "Wavelet Speech Enhancement Based on Robust Principal Component Analysis.",
    "author": "C.-L. Wu, H.-P. Hsu, S.-S. Wang, J.-W. Hung, Y.-H. Lai, H.-M. Wang, and Y. Tsao",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/yang2017discriminative.png",
    "filePath": "paper/conference/yang2017discriminative.pdf",
    "year": 2017,
    "name": "Discriminative Autoencoders for Acoustic Modeling.",
    "author": "M.-H. Yang, H.-S. Lee, Y.-D. Lu, K.-Y. Chen, Y. Tsao, B. Chen, and H.-M. Wang",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/lu2013speech.png",
    "filePath": "paper/conference/lu2013speech.pdf",
    "year": 2013,
    "name": "Speech enhancement based on deep denoising autoencoder.",
    "author": "Xugang Lu, Yu Tsao, Shigeki Matsuda and Chiori Hori",
    "conference": confAbbr.INTERSPEECH,
  }, {
    "imgPath": "img/conference/li2005study.png",
    "filePath": "paper/conference/li2005study.pdf",
    "year": 2005,
    "name": "A study on knowledge source integration for candidate rescoring in automatic speech recognition.",
    "author": "Li, Jinyu and Tsao, Yu and Lee, Chin-Hui",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/lee2018speech.png",
    "filePath": "paper/conference/lee2018speech.pdf",
    "year": 2018,
    "name": "Speech Dereverberation Based on Integrated Deep and Ensemble Learning Algorithm.",
    "author": "W.-J. Lee, S.-S. Wang, F. Chen, X. Lu, S.-Y. Chien, and Y. Tsao",
    "conference": confAbbr.ICASSP,
    "demo": ["Test Audio 1", "audio/test.wav", "Test Audio 2", "audio/test2.wav"],
  }, {
    "imgPath": "img/conference/sun2018novel.png",
    "filePath": "paper/conference/sun2018novel.pdf",
    "year": 2018,
    "name": "A Novel LSTM-based Speech Preprocessor For Speaker Diarization in Realistic Mismatch Conditions.",
    "author": "L. Sun, J. Du, T. Gao, Y.-D. Lu, Y. Tsao, C.-H. Lee, N. Ryant",
    "conference": confAbbr.ICASSP,
    "demo": ["Source", "audio/test3.wav"],
  }, {
    "imgPath": "img/conference/ryant2017enhancement.png",
    "filePath": "paper/conference/ryant2017enhancement.pdf",
    "year": 2018,
    "name": "Enhancement and Analysis of Conversational Speech: JSALT 2017.",
    "author": "N. Ryant et al",
    "conference": confAbbr.ICASSP,
  }, {
    "imgPath": "img/conference/fu2017raw.png",
    "filePath": "paper/conference/fu2017raw.pdf",
    "year": 2017,
    "name": "Raw Waveform-based Speech Enhancement by Fully Convolutional Networks.",
    "author": "S.-W. Fu, Y. Tsao, X. Lu, and H. Kawai",
    "conference": confAbbr.APSIPA,
  }, {
    "imgPath": "img/conference/lin2017computing.png",
    "filePath": "paper/conference/lin2017computing.pdf",
    "year": 2017,
    "name": "Computing Biodiversity Change via a Soundscape Monitoring Network.",
    "author": "T.-H. Lin, Y.-H. Wang, S.-S. Lu, H.-W. Yen, and Y. Tsao",
    "conference": confAbbr.PNC,
  }, {
    "imgPath": "img/conference/peng2017fast.png",
    "filePath": "paper/conference/peng2017fast.pdf",
    "year": 2017,
    "name": "Fast Locally Linear Embedding Algorithm for Exemplar-based Voice Conversion.",
    "author": "Y.-H. Peng, C.-C. Hsu, Y.-C. Wu, H.-T. Hwang, Y.-W. Liu, Y. Tsao, and H.-M. Wang",
    "conference": confAbbr.APSIPA,
  }, {
    "imgPath": "img/conference/wang2017deep.png",
    "filePath": "paper/conference/wang2017deep.pdf",
    "year": 2017,
    "name": "A Deep Learning based Noise Reduction Approach to Improve Speech Intelligibility for Cochlear Implant Recipients in the Presence of Competing Speech Noise.",
    "author": "S.-S. Wang, Y. Tsao, H.-L. S. Wang, Y.-H. Lai*, and L. P.-H. Li",
    "conference": confAbbr.APSIPA,
  }, {
    "imgPath": "img/conference/fu2017complex.png",
    "filePath": "paper/conference/fu2017complex.pdf",
    "year": 2017,
    "name": "Complex Spectrogram Enhancement by Convolutional Neural Network with Multi-metrics Learning.",
    "author": "S.-W. Fu, T.-y. Hu, Y. Tsao, X. Lu",
    "conference": confAbbr.MLSP,
  }, {
    "imgPath": "img/conference/lin2017deblending.png",
    "filePath": "paper/conference/lin2017deblending.pdf",
    "year": 2017,
    "name": "Deblending of Simultaneous-source Seismic Data via Periodicity-coded Nonnegative Matrix Factorization.",
    "author": "T.-H. Lin and Y. Tsao",
    "conference": "IEEE Dataport",
  }
];

function showPaper() {
  let shows = document.getElementsByClassName("showpaper");
  for (let i = 0; i < shows.length; i++) {
    shows[i].style.display = "none";
  }
  shows[current].style.display = "block";
}

function addUnderlineListener() {
  let categories = document.getElementsByClassName("category");
  let underline = document.getElementById("underline");
  underline.style.left = '0px';

  // there is only one category
  if (categories.length < 2) {
    return;
  }

  // add event listener to each category
  for (let i = 0; i < categories.length; i++) {
    categories[i].firstChild.addEventListener("click", function() {
      if (i == current) {
        return;
      }

      let w = categories[0].getBoundingClientRect().width / 100;
      let curPos = parseInt(underline.style.left) * w;
      let prev = current;
      let pos = 0;
      let distance = Math.abs(categories[i].getBoundingClientRect().right -
                              categories[current].getBoundingClientRect().right);
      let time = 0.5; // animation finish in 0.5 second
      let interval = 10; // interval in millisecond
      let underlineAnimation = setInterval(function() {
        if (pos > distance) {
          prev < i ? underline.style.left = (curPos + distance) / w + '%'
                   : underline.style.left = (curPos - distance) / w + '%';
          clearInterval(underlineAnimation);
        } else {
          pos += distance / (time / interval * 1000);
          prev < i ? underline.style.left = (curPos + pos) / w + '%'
                   : underline.style.left = (curPos - pos) / w + '%';
        }
      }, interval);

      current = i;
      showPaper();
    });
  }
}

function buildYear(container, years) {
  let yearTitles = [];
  for (let i = 0; i < years.length; i++) {
    let yearTitle = document.createElement("div");
    yearTitle.className = "row year-title";
    yearTitle.innerHTML = years[i].toString();
    container.appendChild(yearTitle);
    /*
    if (i % 2 == 0) {
      yearTitle.style.background = "#f6f6f6";
    }
    */

    let hr = document.createElement("hr");
    yearTitle.appendChild(hr);

    yearTitles[years[i] - years[years.length - 1]] = yearTitle;
  }

  return yearTitles;
}

let popups = new Map();
function buildPapers() {
  for (let i = 0; i < Object.keys(underlineIdx).length; i++) {
    let container;
    let arr;
    switch (i) {
      case underlineIdx.CONFERENCE:
        container = document.getElementById("conference");
        arr = papers;
        break;
      case underlineIdx.JOURNAL:
        container = document.getElementById("journal");
        arr = journals;
        break;
      default:
        return;
    }

    // build year titles, extract unique years from arr and sort it in decreasing order
    let years = [];
    for (let j in arr) {
      years.push(arr[j]["year"]);
    }
    years = years.filter((e, i, a) => a.indexOf(e) === i);
    years = years.sort((a, b) => b - a);
    let yearTitles = buildYear(container, years);

    // build papers block
    for (let j in arr) {
      let paper = document.createElement("div");
      paper.className = "row paper";
      yearTitles[arr[j]["year"] - years[years.length - 1]].appendChild(paper);

      let s1 = document.createElement("div");
      s1.className = "col s1";
      paper.appendChild(s1);

      let imgPath = document.createElement("img");
      imgPath.className = "paper-img";
      imgPath.src = arr[j]["imgPath"];
      s1.appendChild(imgPath);
      imgPath.onerror = function() {
        imgPath.src = "img/coming_soon.jpg";
      }

      let s2 = document.createElement("div");
      s2.className = "col s2";
      paper.appendChild(s2);

      let paperTitle = document.createElement("span");
      paperTitle.className = "paper-title";
      s2.appendChild(paperTitle);

      let fileName = document.createElement("a");
      fileName.href = arr[j]["filePath"];
      fileName.target = "_blank";
      fileName.innerHTML = arr[j]["name"];
      paperTitle.appendChild(fileName);

      let newline = document.createElement("br");
      fileName.appendChild(newline);

      let author = document.createElement("span");
      author.className = "paper-author";
      author.innerHTML = arr[j]["author"];
      s2.appendChild(author);

      newline = document.createElement("br");
      author.appendChild(newline);

      let conference = document.createElement("span");
      conference.className = "paper-conference";
      conference.innerHTML = arr[j]["conference"] + ", " + arr[j]["year"];
      s2.appendChild(conference);

      newline = document.createElement("br");
      conference.appendChild(newline);

      if ("demo" in arr[j]) {
        let demo = document.createElement("a");
        demo.className = "paper-demo";
        demo.innerHTML = "Demo";
        s2.appendChild(demo);

        let popup = document.createElement("div");
        popup.className = "paper-popup";
        s2.appendChild(popup);
        demo.addEventListener("click", function() {
          popup.style.display = "block";
        });
        popups.set(popup, popup);

        let content = document.createElement("div");
        content.className = "popup-content";
        popup.appendChild(content)

        demoarr = arr[j]["demo"];
        for (let i = 0; i < demoarr.length; i += 2) {
          let description = document.createElement("p");
          description.innerHTML = demoarr[i];
          content.appendChild(description);

          let audio = document.createElement("audio");
          audio.controls = "controls";
          audio.src = demoarr[i+1];
          content.appendChild(audio);
        }
      }
    }

    window.onclick = function(event) {
      if (popups.has(event.target)) {
        popups.get(event.target).style.display = "none";
      }
    }

    // show papers of init category, conference
    showPaper();
  }
}

(function main() {
  // add listener for clicking on difference categories
  addUnderlineListener();

  // build conference, journal block with visibility defautl to none
  buildPapers();
}) ();
