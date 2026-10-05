const flowers = [
      { id: "rose", name: "Hoa hồng", latin: "Rosa × hybrida", wikiTitle: "Rose", group: "garden", label: "Hoa vườn", color: "Đỏ · hồng", swatch: "#c94d5c", origin: "Châu Á, châu Âu", season: "Cuối xuân đến đầu thu", habitat: "Vườn ôn đới, nơi nhiều nắng", meaning: "Tình yêu, lòng trân trọng và vẻ đẹp.", description: "Được trồng qua hàng nghìn năm, hoa hồng có hàng chục nghìn giống lai với dáng hoa, hương thơm và sắc độ phong phú. Cánh hoa thường xếp thành nhiều lớp quanh tâm." },
      { id: "tulip", name: "Tulip", latin: "Tulipa gesneriana", wikiTitle: "Tulip", group: "seasonal", label: "Theo mùa", color: "Đỏ · vàng · tím", swatch: "#df6c4c", origin: "Trung Á", season: "Mùa xuân", habitat: "Khí hậu mát, đất thoát nước", meaning: "Khởi đầu mới và niềm vui mùa xuân.", description: "Tulip có dáng hoa cốc đặc trưng và bảng màu gần như vô tận. Dù thường gắn với Hà Lan, chi Tulipa có nguồn gốc từ những vùng núi Trung Á." },
      { id: "sunflower", name: "Hướng dương", latin: "Helianthus annuus", wikiTitle: "Common sunflower", group: "garden", label: "Hoa vườn", color: "Vàng", swatch: "#edbd42", origin: "Bắc Mỹ", season: "Mùa hè", habitat: "Cánh đồng nhiều nắng", meaning: "Lạc quan, bền bỉ và sức sống.", description: "Những cụm hoa nhỏ kết thành một đĩa lớn rực vàng. Nụ non hướng theo mặt trời trong ngày; hạt hướng dương là nguồn thực phẩm giàu dinh dưỡng." },
      { id: "orchid", name: "Lan hồ điệp", latin: "Phalaenopsis amabilis", wikiTitle: "Phalaenopsis amabilis", group: "tropical", label: "Nhiệt đới", color: "Trắng · hồng", swatch: "#e6b5c5", origin: "Đông Nam Á, Úc", season: "Có thể nở quanh năm", habitat: "Rừng ẩm, bám trên thân cây", meaning: "Thanh nhã, tinh tế và sung túc.", description: "Cánh hoa đối xứng gợi hình cánh bướm đang bay. Trong tự nhiên, nhiều loài lan hồ điệp sống bám trên cây để đón ánh sáng tán xạ và không khí ẩm." },
      { id: "peony", name: "Mẫu đơn", latin: "Paeonia lactiflora", wikiTitle: "Peony", group: "garden", label: "Hoa vườn", color: "Hồng · trắng", swatch: "#d9819b", origin: "Trung Quốc, Đông Á", season: "Cuối xuân", habitat: "Vườn ôn đới", meaning: "Thịnh vượng, viên mãn và danh dự.", description: "Những bông mẫu đơn lớn có nhiều lớp cánh mềm và hương thơm ngọt dịu. Cây có thể sống hàng chục năm và thường nở rộ sau mùa đông lạnh." },
      { id: "lavender", name: "Oải hương", latin: "Lavandula angustifolia", wikiTitle: "Lavandula", group: "wild", label: "Hoa dại", color: "Tím", swatch: "#8773a5", origin: "Địa Trung Hải", season: "Đầu đến giữa mùa hè", habitat: "Sườn đồi khô, nhiều nắng", meaning: "Bình yên, thư thái và tận tâm.", description: "Các bông nhỏ mọc thành bông dài màu tím, thu hút ong và bướm. Hương oải hương được dùng rộng rãi trong nước hoa, ẩm thực và các sản phẩm thư giãn." },
      { id: "dahlia", name: "Thược dược", latin: "Dahlia pinnata", wikiTitle: "Dahlia", group: "garden", label: "Hoa vườn", color: "Cam · đỏ · tím", swatch: "#e67d4c", origin: "Mexico", season: "Mùa hè đến đầu thu", habitat: "Đất giàu dinh dưỡng, nhiều nắng", meaning: "Sáng tạo, duyên dáng và sức mạnh.", description: "Thược dược nổi tiếng bởi cấu trúc cánh hoa hình học và sự đa dạng đáng kinh ngạc về kích thước. Đây là quốc hoa của Mexico." },
      { id: "lotus", name: "Hoa sen", latin: "Nelumbo nucifera", wikiTitle: "Nelumbo nucifera", group: "tropical", label: "Nhiệt đới", color: "Hồng · trắng", swatch: "#e795a8", origin: "Châu Á", season: "Mùa hè", habitat: "Ao, hồ nước nông", meaning: "Thanh khiết, an nhiên và tái sinh.", description: "Lá sen có bề mặt khiến nước đọng thành giọt tròn rồi lăn đi. Hoa vươn khỏi mặt nước, gắn bó sâu sắc với văn hóa và nghệ thuật nhiều nước châu Á." },
      { id: "hydrangea", name: "Cẩm tú cầu", latin: "Hydrangea macrophylla", wikiTitle: "Hydrangea", group: "garden", label: "Hoa vườn", color: "Xanh · hồng", swatch: "#769cc2", origin: "Nhật Bản, Đông Á", season: "Cuối xuân đến hè", habitat: "Vườn ẩm, bóng râm nhẹ", meaning: "Lòng biết ơn và sự chân thành.", description: "Một cụm cẩm tú cầu là tập hợp của nhiều hoa nhỏ. Độ pH đất có thể làm thay đổi sắc xanh hoặc hồng ở một số giống, tạo nên hiện tượng hiếm gặp trong vườn." },
      { id: "cherry", name: "Anh đào", latin: "Prunus serrulata", wikiTitle: "Cherry blossom", group: "seasonal", label: "Theo mùa", color: "Trắng · hồng", swatch: "#e9a2ae", origin: "Nhật Bản, Hàn Quốc, Trung Quốc", season: "Đầu xuân", habitat: "Công viên, sườn đồi ôn đới", meaning: "Vẻ đẹp mong manh và sự khởi đầu.", description: "Hoa anh đào thường nở thành từng chùm dọc cành trơ lá, tạo nên những vòm hoa mong manh. Thời gian nở rộ ngắn khiến mùa hoa trở thành dịp hội ngắm hoa ở nhiều nơi." },
      { id: "iris", name: "Diên vĩ", latin: "Iris germanica", wikiTitle: "Iris (plant)", group: "wild", label: "Hoa dại", color: "Tím · xanh", swatch: "#7771a7", origin: "Châu Âu, Địa Trung Hải", season: "Cuối xuân đến đầu hè", habitat: "Bãi cỏ, bờ suối, vườn nắng", meaning: "Hy vọng, trí tuệ và lòng can đảm.", description: "Cánh hoa diên vĩ xòe thành ba cánh dựng và ba cánh rủ, tạo nên hình dáng không thể nhầm lẫn. Tên hoa bắt nguồn từ nữ thần cầu vồng Iris trong thần thoại Hy Lạp." },
      { id: "poppy", name: "Anh túc", latin: "Papaver rhoeas", wikiTitle: "Papaver rhoeas", group: "wild", label: "Hoa dại", color: "Đỏ", swatch: "#ce5149", origin: "Châu Âu, Tây Á", season: "Mùa xuân đến hè", habitat: "Đồng cỏ, đất canh tác", meaning: "Tưởng niệm, giấc ngủ và hòa bình.", description: "Cánh hoa mỏng như giấy rung nhẹ trong gió. Anh túc đỏ thường mọc trên đồng cỏ và đã trở thành biểu tượng tưởng niệm trong văn hóa của nhiều quốc gia." },
      { id: "daffodil", name: "Thủy tiên", latin: "Narcissus pseudonarcissus", wikiTitle: "Narcissus (plant)", group: "seasonal", label: "Theo mùa", color: "Vàng · trắng", swatch: "#e7c54a", origin: "Tây Âu", season: "Cuối đông đến đầu xuân", habitat: "Đồng cỏ và vườn ôn đới", meaning: "Hy vọng và sự khởi đầu mới.", description: "Hoa thủy tiên có sáu cánh bao quanh phần tràng hình loa kèn. Củ cây chứa chất độc tự nhiên, vì vậy không nên ăn hoặc dùng chung bình với hoa cắt cành khác." },
      { id: "chrysanthemum", name: "Cúc đại đóa", latin: "Chrysanthemum × morifolium", wikiTitle: "Chrysanthemum × morifolium", family: "Asteraceae", genus: "Chrysanthemum", growthForm: "Thân thảo", group: "garden", label: "Họ Cúc", color: "Vàng · trắng · tím", swatch: "#e0bd48", origin: "Đông Á", season: "Cuối hè đến mùa thu", habitat: "Vườn nhiều nắng, đất thoát nước", meaning: "Trường thọ, niềm vui và sự bền bỉ.", description: "Cúc đại đóa là nhóm cúc trồng làm cảnh với hình dạng cụm hoa rất đa dạng, từ dạng pompon đến cánh nhện. Nhiều giống nở rộ khi ngày ngắn lại." },
      { id: "jasmine", name: "Hoa nhài", latin: "Jasminum sambac", wikiTitle: "Jasminum sambac", group: "tropical", label: "Nhiệt đới", color: "Trắng", swatch: "#f1eee2", origin: "Nam Á", season: "Mùa hè, có thể nở nhiều đợt", habitat: "Vùng ấm, đất ẩm và nhiều nắng", meaning: "Dịu dàng, thanh khiết và hiếu khách.", description: "Những bông nhài nhỏ tỏa hương rõ nhất vào buổi tối. Hoa được dùng để ướp trà và là biểu tượng văn hóa tại nhiều quốc gia Nam Á." },
      { id: "gardenia", name: "Dành dành", latin: "Gardenia jasminoides", wikiTitle: "Gardenia jasminoides", group: "garden", label: "Hoa vườn", color: "Trắng", swatch: "#eeeadd", origin: "Đông Á", season: "Cuối xuân đến hè", habitat: "Khí hậu ấm, đất hơi chua", meaning: "Trong sáng, chân thành và bình yên.", description: "Hoa dành dành có cánh trắng dày và hương thơm ngọt. Cây thường xanh, ưa đất chua nhẹ và cần được che khỏi nắng gắt giữa trưa." },
      { id: "marigold", name: "Vạn thọ", latin: "Tagetes erecta", wikiTitle: "Tagetes erecta", group: "garden", label: "Hoa vườn", color: "Vàng · cam", swatch: "#e88a36", origin: "Mexico, Trung Mỹ", season: "Mùa hè đến sương giá đầu mùa", habitat: "Đất thoát nước, nhiều nắng", meaning: "Ấm áp, tưởng nhớ và sức sống.", description: "Vạn thọ tạo cụm hoa màu vàng hoặc cam và thường được trồng quanh năm ở vùng nhiệt đới. Mùi lá đặc trưng giúp phân biệt cây với nhiều loài hoa vườn khác." },
      { id: "magnolia", name: "Mộc lan thường xanh", latin: "Magnolia grandiflora", wikiTitle: "Magnolia grandiflora", family: "Magnoliaceae", genus: "Magnolia", growthForm: "Thân gỗ · cây đại thụ", height: "Thường 20–30 m khi trưởng thành", group: "garden", label: "Cây thân gỗ", color: "Trắng kem", swatch: "#eee6da", origin: "Đông Nam Hoa Kỳ", season: "Cuối xuân đến hè", habitat: "Rừng ẩm và đất sâu, thoát nước", meaning: "Thanh cao, bền bỉ và phẩm giá.", description: "Đây là cây thân gỗ thường xanh, không phải cây bụi nhỏ: trong sinh cảnh phù hợp có thể cao khoảng 20–30 m, thân lớn và tán rộng. Hoa lớn, thơm nở trên cành; loài bản địa vùng Đông Nam Hoa Kỳ." },
      { id: "camellia", name: "Trà mi", latin: "Camellia japonica", wikiTitle: "Camellia japonica", group: "garden", label: "Hoa vườn", color: "Đỏ · hồng · trắng", swatch: "#bb4354", origin: "Nhật Bản, Hàn Quốc, Trung Quốc", season: "Mùa đông đến đầu xuân", habitat: "Vườn mát, đất chua nhẹ", meaning: "Ngưỡng mộ, tận tâm và duyên dáng.", description: "Trà mi là cây bụi thường xanh với hoa nở khi nhiều cây khác đang nghỉ đông. Cây trà uống hằng ngày cũng thuộc chi Camellia, nhưng là loài Camellia sinensis." },
      { id: "hibiscus", name: "Dâm bụt", latin: "Hibiscus rosa-sinensis", wikiTitle: "Hibiscus rosa-sinensis", group: "tropical", label: "Nhiệt đới", color: "Đỏ · vàng · hồng", swatch: "#d64b54", origin: "Đông Á", season: "Quanh năm ở vùng nhiệt đới", habitat: "Vùng ấm, nhiều nắng", meaning: "Vẻ đẹp rực rỡ và lòng hiếu khách.", description: "Hoa dâm bụt có trụ nhị dài nổi bật ở giữa bông. Mỗi hoa thường chỉ nở trong thời gian ngắn, nhưng cây có thể liên tục tạo nụ trong điều kiện ấm áp." },
      { id: "carnation", name: "Cẩm chướng", latin: "Dianthus caryophyllus", wikiTitle: "Dianthus caryophyllus", group: "garden", label: "Hoa vườn", color: "Hồng · đỏ · trắng", swatch: "#d36b83", origin: "Địa Trung Hải", season: "Cuối xuân đến hè", habitat: "Đất thoát nước, nhiều nắng", meaning: "Trìu mến, biết ơn và gắn bó.", description: "Cánh cẩm chướng có viền răng cưa đặc trưng. Nhờ độ bền sau khi cắt, hoa thường được dùng trong bó hoa và các dịp kỷ niệm." },
      { id: "snapdragon", name: "Mõm sói", latin: "Antirrhinum majus", wikiTitle: "Antirrhinum majus", group: "garden", label: "Hoa vườn", color: "Đỏ · vàng · hồng", swatch: "#d76a57", origin: "Địa Trung Hải", season: "Mùa xuân đến đầu hè", habitat: "Đất mát, thoát nước tốt", meaning: "Sức mạnh, duyên dáng và sáng tạo.", description: "Hoa mõm sói mọc thành bông dày. Khi bóp nhẹ hai bên hoa, tràng hoa mở ra như một chiếc miệng nhỏ, tạo nên tên gọi quen thuộc của cây." },
      { id: "freesia", name: "Lan Nam Phi", latin: "Freesia refracta", wikiTitle: "Freesia", group: "garden", label: "Hoa vườn", color: "Trắng · vàng · hồng", swatch: "#e5c45d", origin: "Nam Phi", season: "Cuối đông đến mùa xuân", habitat: "Khí hậu mát, đất thoát nước", meaning: "Tin tưởng, trong trẻo và khởi đầu mới.", description: "Freesia mọc từ thân củ và mang những bông thơm xếp dọc một phía của cành cong. Nhiều giống lai có hương thơm nhẹ và màu sắc phong phú." },
      { id: "zinnia", name: "Cúc zinnia", latin: "Zinnia elegans", wikiTitle: "Zinnia elegans", group: "garden", label: "Hoa vườn", color: "Đỏ · cam · tím", swatch: "#df6551", origin: "Mexico", season: "Mùa hè đến đầu thu", habitat: "Vườn nóng, nhiều nắng", meaning: "Tình bạn bền lâu và niềm vui.", description: "Zinnia dễ trồng từ hạt và thu hút bướm, ong đến vườn. Các giống khác nhau tạo cụm hoa đơn, kép hoặc dạng pom-pom." },
      { id: "anemone", name: "Hải quỳ cạn", latin: "Anemone coronaria", wikiTitle: "Anemone coronaria", group: "wild", label: "Hoa dại", color: "Đỏ · tím · trắng", swatch: "#a54d79", origin: "Địa Trung Hải", season: "Cuối đông đến mùa xuân", habitat: "Đồng cỏ và sườn đồi khô", meaning: "Mong đợi và sự thức tỉnh.", description: "Hải quỳ cạn có tâm hoa sẫm bao quanh bởi những cánh rực màu. Đây là cây thân củ nở vào mùa mát ở vùng Địa Trung Hải." },
      { id: "begonia", name: "Thu hải đường", latin: "Begonia semperflorens", wikiTitle: "Begonia", group: "tropical", label: "Nhiệt đới", color: "Hồng · đỏ · trắng", swatch: "#d8667d", origin: "Vùng nhiệt đới và cận nhiệt đới", season: "Mùa ấm, thường nở lâu", habitat: "Đất ẩm, bóng râm nhẹ", meaning: "Cẩn trọng, hài hòa và quan tâm.", description: "Chi Begonia có hàng nghìn loài với hoa và lá đa dạng. Nhiều giống trồng chậu chịu bóng bán phần và nở liên tục trong mùa ấm." },
      { id: "bird-of-paradise", name: "Thiên điểu", latin: "Strelitzia reginae", wikiTitle: "Strelitzia reginae", group: "tropical", label: "Nhiệt đới", color: "Cam · xanh", swatch: "#e97d39", origin: "Nam Phi", season: "Mùa đông đến mùa xuân", habitat: "Khí hậu ấm, nhiều nắng", meaning: "Tự do, lạc quan và phiêu lưu.", description: "Cụm hoa thiên điểu gồm mo hoa cứng màu xanh và cam, gợi hình một chú chim đang bay. Cây được thụ phấn bởi chim hút mật tại nơi bản địa." },
      { id: "blue-poppy", name: "Anh túc xanh Himalaya", latin: "Meconopsis betonicifolia", wikiTitle: "Meconopsis betonicifolia", group: "wild", label: "Hoa dại", color: "Xanh lam", swatch: "#5c91b5", origin: "Himalaya", season: "Đầu đến giữa mùa hè", habitat: "Đồng cỏ núi cao, khí hậu mát", meaning: "Hy vọng, bình yên và vẻ đẹp hiếm gặp.", description: "Loài anh túc xanh núi cao cần mùa hè mát và đất ẩm giàu mùn. Màu xanh lam nổi bật của cánh hoa khiến cây được săn tìm trong các vườn khí hậu mát." },
      { id: "foxglove", name: "Mao địa hoàng", latin: "Digitalis purpurea", wikiTitle: "Digitalis purpurea", group: "wild", label: "Hoa dại", color: "Tím · hồng", swatch: "#916a9d", origin: "Tây Âu", season: "Cuối xuân đến hè", habitat: "Bìa rừng và đất chua", meaning: "Sự kỳ diệu và lòng sáng tạo.", description: "Những bông hình chuông mọc thành chùm cao, thường có đốm bên trong. Toàn cây chứa glycoside tim và rất độc nếu ăn phải." },
      { id: "cosmos", name: "Cúc sao nháy", latin: "Cosmos bipinnatus", wikiTitle: "Cosmos bipinnatus", group: "garden", label: "Hoa vườn", color: "Hồng · trắng · tím", swatch: "#d38aa3", origin: "Mexico", season: "Mùa hè đến đầu thu", habitat: "Đất nghèo vừa phải, nhiều nắng", meaning: "Hài hòa, trật tự và giản dị.", description: "Cúc sao nháy có tán lá mảnh và hoa nhẹ như cánh bướm. Cây dễ gieo từ hạt, thường tự gieo lại và thu hút nhiều loài côn trùng thụ phấn." },
      { id: "morning-glory", name: "Bìm bìm", latin: "Ipomoea purpurea", wikiTitle: "Ipomoea purpurea", group: "wild", label: "Hoa dại", color: "Tím · xanh · hồng", swatch: "#716daf", origin: "Trung và Nam Mỹ", season: "Mùa hè đến đầu thu", habitat: "Dây leo nơi nhiều nắng", meaning: "Tình cảm chân thành và khoảnh khắc đẹp.", description: "Hoa bìm bìm hình loa kèn thường mở vào buổi sáng rồi khép lại trong ngày. Dây leo phát triển nhanh và cần giàn hoặc hàng rào để bám." },
      { id: "sweet-pea", name: "Đậu thơm", latin: "Lathyrus odoratus", wikiTitle: "Lathyrus odoratus", group: "garden", label: "Hoa vườn", color: "Hồng · tím · trắng", swatch: "#bd8cb7", origin: "Sicily, Địa Trung Hải", season: "Cuối xuân đến đầu hè", habitat: "Khí hậu mát, có giàn leo", meaning: "Niềm vui dịu dàng và lời tạm biệt.", description: "Đậu thơm là dây leo có hoa cánh bướm tỏa hương. Cây ưa thời tiết mát và thường được trồng từ hạt vào đầu mùa để kịp nở trước khi trời nóng." },
      { id: "forget-me-not", name: "Lưu ly", latin: "Myosotis sylvatica", wikiTitle: "Myosotis sylvatica", group: "wild", label: "Hoa dại", color: "Xanh lam", swatch: "#6196ca", origin: "Châu Âu", season: "Mùa xuân đến đầu hè", habitat: "Đất ẩm, bờ suối và vườn râm", meaning: "Ký ức, thủy chung và tình bạn.", description: "Những bông lưu ly nhỏ có năm cánh xanh quanh tâm vàng. Cây thường mọc thành cụm và tự gieo hạt ở nơi đất ẩm." },
      { id: "frangipani", name: "Sứ đại", latin: "Plumeria rubra", wikiTitle: "Plumeria rubra", group: "tropical", label: "Nhiệt đới", color: "Trắng · vàng · hồng", swatch: "#e8c46d", origin: "Mexico, Trung Mỹ", season: "Mùa hè", habitat: "Khí hậu nhiệt đới, nhiều nắng", meaning: "Chào đón, khởi đầu và sự duyên dáng.", description: "Hoa sứ mọc thành cụm ở đầu cành, thường có tâm vàng và hương thơm rõ. Cây rụng lá vào mùa khô hoặc lạnh và tiết nhựa trắng khi cành bị tổn thương." },
      { id: "gerbera", name: "Đồng tiền", latin: "Gerbera jamesonii", wikiTitle: "Gerbera jamesonii", group: "garden", label: "Hoa vườn", color: "Đỏ · cam · vàng", swatch: "#e66a45", origin: "Nam Phi", season: "Mùa xuân đến thu", habitat: "Nơi thoáng nắng, đất thoát nước", meaning: "Niềm vui, sức sống và sự lạc quan.", description: "Hoa đồng tiền thực chất là cụm gồm nhiều hoa nhỏ xếp trên một đế chung. Nhiều màu rực rỡ và độ bền sau khi cắt giúp cây phổ biến trong ngành hoa." },
      { id: "lilac", name: "Tử đinh hương", latin: "Syringa vulgaris", wikiTitle: "Syringa vulgaris", group: "garden", label: "Hoa vườn", color: "Tím · trắng", swatch: "#9b83ad", origin: "Bán đảo Balkan", season: "Giữa đến cuối mùa xuân", habitat: "Vườn ôn đới, mùa đông lạnh", meaning: "Tình cảm đầu đời và ký ức mùa xuân.", description: "Các hoa nhỏ của tử đinh hương tụ thành chùm nón thơm. Cây cần một giai đoạn lạnh mùa đông để ra hoa tốt vào mùa xuân kế tiếp." },
      { id: "snowdrop", name: "Giọt tuyết", latin: "Galanthus nivalis", wikiTitle: "Galanthus nivalis", group: "seasonal", label: "Theo mùa", color: "Trắng", swatch: "#eceee7", origin: "Châu Âu", season: "Cuối đông", habitat: "Rừng thưa và đồng cỏ mát", meaning: "Hy vọng và sự hồi sinh.", description: "Giọt tuyết thường đâm chồi khi thời tiết còn lạnh, với hoa trắng rủ xuống như chiếc chuông nhỏ. Củ cây chứa alkaloid và không dùng làm thực phẩm." },
      { id: "crocus", name: "Nghệ tây", latin: "Crocus sativus", wikiTitle: "Crocus sativus", group: "seasonal", label: "Theo mùa", color: "Tím", swatch: "#9675a6", origin: "Hy Lạp và Tây Á", season: "Mùa thu", habitat: "Vùng khô, đất thoát nước", meaning: "Vui tươi, phấn chấn và ấm áp.", description: "Crocus sativus nở hoa tím vào mùa thu. Ba đầu nhụy đỏ được thu hái và sấy để tạo thành gia vị nghệ tây quý, cần rất nhiều hoa cho một lượng nhỏ." },
      { id: "pansy", name: "Păng-xê", latin: "Viola tricolor", wikiTitle: "Pansy", group: "garden", label: "Hoa vườn", color: "Tím · vàng · trắng", swatch: "#866e9f", origin: "Châu Âu", season: "Mùa mát", habitat: "Vườn mát, đất ẩm vừa", meaning: "Tưởng nhớ và suy tư.", description: "Hoa păng-xê có cánh thường mang nhiều mảng màu tương phản. Cây chịu lạnh tốt hơn nhiều hoa vườn khác và thường được trồng vào mùa thu hoặc đầu xuân." },
      { id: "lily", name: "Hoa bách hợp", latin: "Lilium candidum", wikiTitle: "Lilium candidum", group: "garden", label: "Hoa vườn", color: "Trắng", swatch: "#f0eee3", origin: "Địa Trung Hải", season: "Cuối xuân đến hè", habitat: "Vườn nắng, đất thoát nước", meaning: "Thanh khiết, hy vọng và trang trọng.", description: "Bách hợp mang những bông hình loa kèn trên thân cao. Phấn hoa có thể để lại vết khó giặt và độc với mèo, nên cần đặt xa vật nuôi." },
      { id: "ranunculus", name: "Hoàng liên", latin: "Ranunculus asiaticus", wikiTitle: "Ranunculus asiaticus", group: "garden", label: "Hoa vườn", color: "Hồng · vàng · đỏ", swatch: "#e87975", origin: "Đông Địa Trung Hải", season: "Mùa xuân", habitat: "Khí hậu mát, đất thoát nước", meaning: "Duyên dáng và sức hút.", description: "Hoa mao lương Ba Tư có nhiều lớp cánh mỏng xếp chặt quanh tâm. Cây phát triển tốt trong thời tiết mát và thường được trồng từ củ." },
      { id: "gladiolus", name: "Lay ơn", latin: "Gladiolus communis", wikiTitle: "Gladiolus", group: "garden", label: "Hoa vườn", color: "Đỏ · hồng · vàng", swatch: "#d35c6e", origin: "Châu Phi và vùng Địa Trung Hải", season: "Mùa hè", habitat: "Đất tơi xốp, nhiều nắng", meaning: "Bản lĩnh, trung thực và tưởng nhớ.", description: "Lay ơn tạo một bông hoa dài với các bông nhỏ nở dần từ dưới lên. Cây mọc từ thân củ và thường cần được chống đỡ khi cành mang nhiều hoa." },
      { id: "edelweiss", name: "Nhung tuyết", latin: "Leontopodium alpinum", wikiTitle: "Leontopodium alpinum", group: "wild", label: "Hoa dại", color: "Trắng bạc", swatch: "#d4d7d0", origin: "Dãy Alps và Carpath", season: "Mùa hè", habitat: "Vách đá và đồng cỏ núi cao", meaning: "Can đảm, tận tụy và tình yêu bền bỉ.", description: "Nhung tuyết mọc ở độ cao lớn, có lớp lông mịn giúp hạn chế mất nước và bảo vệ hoa trước giá lạnh. Cây mọc chậm và được bảo vệ tại một số khu vực." },
      { id: "protea", name: "Đường trá", latin: "Protea cynaroides", wikiTitle: "Protea cynaroides", group: "wild", label: "Hoa dại", color: "Hồng · trắng", swatch: "#d87583", origin: "Nam Phi", season: "Mùa đông đến xuân", habitat: "Vùng cây bụi fynbos", meaning: "Biến đổi, đa dạng và lòng can đảm.", description: "King protea có cụm hoa lớn được bao quanh bởi các lá bắc hồng. Cây thích nghi với môi trường đất nghèo dinh dưỡng và khí hậu Địa Trung Hải của vùng Cape." },
      { id: "echinacea", name: "Cúc nón", latin: "Echinacea purpurea", wikiTitle: "Echinacea purpurea", group: "wild", label: "Hoa dại", color: "Tím hồng", swatch: "#ae6687", origin: "Trung và Đông Bắc Mỹ", season: "Mùa hè", habitat: "Thảo nguyên nhiều nắng", meaning: "Sức mạnh và sự kiên cường.", description: "Cúc nón có đĩa hoa hình nón nổi bật ở giữa các cánh rủ. Cây thảo nguyên chịu hạn tốt sau khi bén rễ và là nguồn mật cho côn trùng." },
      { id: "poinsettia", name: "Trạng nguyên", latin: "Euphorbia pulcherrima", wikiTitle: "Euphorbia pulcherrima", group: "seasonal", label: "Theo mùa", color: "Đỏ · kem", swatch: "#c34850", origin: "Mexico", season: "Mùa đông", habitat: "Khí hậu nhiệt đới, nơi sáng", meaning: "Niềm vui và sự sum họp.", description: "Phần đỏ nổi bật của trạng nguyên là lá bắc, còn hoa thật nằm thành cụm nhỏ ở tâm. Đêm dài kích thích cây lên màu vào mùa đông." },
      { id: "azalea", name: "Đỗ quyên", latin: "Rhododendron simsii", wikiTitle: "Rhododendron simsii", group: "garden", label: "Hoa vườn", color: "Hồng · đỏ · trắng", swatch: "#d36684", origin: "Đông Á", season: "Cuối đông đến xuân", habitat: "Đất chua, thoát nước, bóng râm nhẹ", meaning: "Dịu dàng, chăm sóc và sum vầy.", description: "Đỗ quyên là nhóm cây bụi có hoa nở thành chùm dày. Cây cần đất chua và bộ rễ nông, vì thế thường không chịu được đất vôi." },
      { id: "tuberose", name: "Huệ ta", latin: "Agave amica", wikiTitle: "Agave amica", group: "tropical", label: "Nhiệt đới", color: "Trắng", swatch: "#f1eddd", origin: "Mexico", season: "Cuối hè đến thu", habitat: "Khí hậu ấm, đất thoát nước", meaning: "Duyên dáng, thanh nhã và khởi đầu mới.", description: "Huệ ta mọc thành chùm hoa trắng thơm trên một cành dài. Hoa thường nở vào buổi tối và được trồng rộng rãi làm hoa cắt cành ở vùng nhiệt đới." },
      { id: "bluebell", name: "Chuông xanh", latin: "Hyacinthoides non-scripta", wikiTitle: "Hyacinthoides non-scripta", group: "wild", label: "Hoa dại", color: "Xanh tím", swatch: "#6679aa", origin: "Tây Âu", season: "Giữa đến cuối mùa xuân", habitat: "Rừng rụng lá", meaning: "Khiêm nhường, bền bỉ và biết ơn.", description: "Chuông xanh mọc thành thảm dưới tán rừng vào mùa xuân. Mỗi cành mang nhiều hoa hình chuông rủ về cùng một phía." },
      { id: "hellebore", name: "Hồng đông", latin: "Helleborus niger", wikiTitle: "Helleborus niger", group: "seasonal", label: "Theo mùa", color: "Trắng · hồng", swatch: "#e8e4d9", origin: "Trung và Nam Âu", season: "Mùa đông đến đầu xuân", habitat: "Rừng núi, bóng râm", meaning: "Hy vọng và bình an giữa mùa lạnh.", description: "Hồng đông có thể nở giữa mùa lạnh, thường với hoa trắng chuyển hồng theo thời gian. Các bộ phận của cây có độc nếu ăn phải." },
      { id: "heather", name: "Thạch nam", latin: "Calluna vulgaris", wikiTitle: "Calluna vulgaris", group: "wild", label: "Hoa dại", color: "Tím · hồng", swatch: "#a77a9e", origin: "Châu Âu", season: "Cuối hè đến thu", habitat: "Đồng hoang đất chua", meaning: "May mắn, bảo vệ và độc lập.", description: "Thạch nam là cây bụi thấp phủ hoa nhỏ trên các vùng đất chua rộng lớn. Cây chịu gió và đất nghèo, đồng thời cung cấp mật cho ong vào cuối mùa hè." },
      { id: "queen-of-night", name: "Dạ quỳnh", latin: "Epiphyllum oxypetalum", wikiTitle: "Epiphyllum oxypetalum", group: "tropical", label: "Nhiệt đới", color: "Trắng", swatch: "#eeece2", origin: "Trung Mỹ", season: "Mùa ấm, nở ban đêm", habitat: "Rừng nhiệt đới, bám trên cây", meaning: "Khoảnh khắc quý giá và vẻ đẹp thoáng qua.", description: "Dạ quỳnh tạo bông lớn màu trắng, nở về đêm và thường khép lại trước sáng hôm sau. Cây thuộc nhóm xương rồng biểu sinh, không phải cây sa mạc." },
      { id: "ylang-ylang", name: "Ngọc lan tây", latin: "Cananga odorata", wikiTitle: "Cananga odorata", group: "tropical", label: "Nhiệt đới", color: "Vàng xanh", swatch: "#b2ab57", origin: "Đông Nam Á", season: "Quanh năm ở vùng ấm", habitat: "Rừng nhiệt đới ẩm", meaning: "Niềm vui, lãng mạn và thư thái.", description: "Hoa ngọc lan tây có cánh dài rủ xuống và hương thơm mạnh. Tinh dầu từ hoa là một thành phần nổi tiếng trong nước hoa." },
      { id: "anthurium", name: "Hồng môn", latin: "Anthurium andraeanum", wikiTitle: "Anthurium andraeanum", group: "tropical", label: "Nhiệt đới", color: "Đỏ · hồng", swatch: "#cc4f56", origin: "Nam Mỹ", season: "Quanh năm trong điều kiện thích hợp", habitat: "Rừng ẩm, ánh sáng tán xạ", meaning: "Hiếu khách và nồng nhiệt.", description: "Phần đỏ bóng của hồng môn là mo hoa, bao quanh một cụm hoa dạng trụ. Cây ưa ẩm và ánh sáng gián tiếp, tránh nắng gắt." },
      { id: "amaryllis", name: "Loa kèn đỏ", latin: "Hippeastrum", wikiTitle: "Hippeastrum", group: "seasonal", label: "Theo mùa", color: "Đỏ · trắng · hồng", swatch: "#c84f5b", origin: "Nam Mỹ", season: "Mùa đông đến xuân", habitat: "Đất thoát nước, ánh sáng tốt", meaning: "Tự tin, rực rỡ và quyết tâm.", description: "Hippeastrum thường được gọi là amaryllis trong thương mại và có thể tạo các bông lớn từ một củ. Đây không phải loài Amaryllis belladonna cùng tên gọi phổ biến." },
      { id: "cornflower", name: "Thanh cúc", latin: "Centaurea cyanus", wikiTitle: "Centaurea cyanus", group: "wild", label: "Hoa dại", color: "Xanh lam", swatch: "#4c80ad", origin: "Châu Âu", season: "Cuối xuân đến hè", habitat: "Đồng cỏ và ruộng ngũ cốc", meaning: "Hy vọng, dịu dàng và tận tâm.", description: "Thanh cúc có những cánh xanh lam tua mảnh, từng phổ biến trên các cánh đồng ngũ cốc. Hoa thu hút ong và bướm, nhưng loài hoang dã đã giảm ở nhiều nơi." },
      { id: "california-poppy", name: "Anh túc California", latin: "Eschscholzia californica", wikiTitle: "Eschscholzia californica", group: "wild", label: "Hoa dại", color: "Cam · vàng", swatch: "#ed853f", origin: "Miền tây Bắc Mỹ", season: "Mùa xuân đến hè", habitat: "Đồng cỏ khô, nhiều nắng", meaning: "Giấc ngủ yên bình và vẻ đẹp tự nhiên.", description: "Anh túc California là hoa biểu tượng của bang California. Cánh hoa màu cam khép lại khi trời lạnh hoặc thiếu sáng và mở ra dưới nắng." },
      { id: "bleeding-heart", name: "Tim vỡ", latin: "Lamprocapnos spectabilis", wikiTitle: "Lamprocapnos spectabilis", group: "garden", label: "Hoa vườn", color: "Hồng · trắng", swatch: "#d7788a", origin: "Đông Á", season: "Mùa xuân", habitat: "Vườn râm mát, đất ẩm", meaning: "Tình cảm sâu sắc và lòng trắc ẩn.", description: "Hoa tim vỡ rủ thành chùm, mỗi bông có hình trái tim với giọt nhỏ ở đầu. Phần cây trên mặt đất thường tàn vào mùa nóng sau khi hoa kết thúc." },
      { id: "bellflower", name: "Hoa chuông", latin: "Campanula medium", wikiTitle: "Campanula medium", group: "garden", label: "Hoa vườn", color: "Tím · xanh · trắng", swatch: "#7985b8", origin: "Nam Âu", season: "Cuối xuân đến hè", habitat: "Vườn mát, đất thoát nước", meaning: "Biết ơn, khiêm nhường và lòng kiên định.", description: "Hoa chuông có tràng hình chuông với sắc tím, xanh hoặc trắng. Nhiều loài Campanula thích hợp cho vườn đá và vùng khí hậu mát." },
      { id: "osmanthus", name: "Mộc tê", latin: "Osmanthus fragrans", wikiTitle: "Osmanthus fragrans", group: "garden", label: "Hoa vườn", color: "Trắng · vàng cam", swatch: "#dfa84a", origin: "Đông Á", season: "Cuối hè đến thu", habitat: "Vườn ôn đới ấm, đất thoát nước", meaning: "Đoàn viên, cao quý và mến khách.", description: "Mộc tê là cây bụi thường xanh với những chùm hoa nhỏ nhưng tỏa hương mạnh. Hoa được dùng tạo hương cho trà và một số món ăn ở Đông Á." },
      { id: "sage", name: "Xô thơm", latin: "Salvia officinalis", wikiTitle: "Salvia officinalis", group: "garden", label: "Hoa vườn", color: "Tím xanh", swatch: "#81909a", origin: "Địa Trung Hải", season: "Cuối xuân đến hè", habitat: "Đất khô ráo, nhiều nắng", meaning: "Sáng suốt, bình tĩnh và khôn ngoan.", description: "Xô thơm là cây bụi thơm với lá thường dùng làm gia vị. Hoa mọc thành vòng dọc cành và thu hút ong; cây thích nghi tốt với đất khô thoát nước." },
      { id: "aster", name: "Thạch thảo", latin: "Aster amellus", wikiTitle: "Aster amellus", group: "wild", label: "Hoa dại", color: "Tím · vàng", swatch: "#8b71a4", origin: "Châu Âu và Tây Á", season: "Cuối hè đến thu", habitat: "Đồng cỏ khô và sườn đồi", meaning: "Kiên nhẫn, dịu dàng và khởi đầu mới.", description: "Thạch thảo có tâm hoa vàng bao quanh bởi cánh tím hẹp. Nhiều loài thuộc chi Aster nở muộn, cung cấp mật cho côn trùng trước mùa đông." },
      { id: "bougainvillea", name: "Hoa giấy", latin: "Bougainvillea glabra", wikiTitle: "Bougainvillea", group: "tropical", label: "Nhiệt đới", color: "Hồng · tím · cam", swatch: "#c45183", origin: "Nam Mỹ", season: "Quanh năm ở vùng ấm", habitat: "Nắng trực tiếp, đất thoát nước", meaning: "Sức sống rực rỡ và sự chào đón.", description: "Sắc màu nổi bật của hoa giấy là lá bắc mỏng bao quanh những hoa thật nhỏ màu trắng. Dây leo chịu hạn tốt và thường được trồng phủ cổng, tường." },
      { id: "borage", name: "Lưu ly xanh", latin: "Borago officinalis", wikiTitle: "Borago officinalis", group: "wild", label: "Hoa dại", color: "Xanh lam", swatch: "#568db7", origin: "Địa Trung Hải", season: "Mùa hè", habitat: "Đất tơi xốp, nhiều nắng", meaning: "Can đảm và lòng vui vẻ.", description: "Hoa lưu ly xanh hình ngôi sao thường rủ xuống, có lông mịn trên thân và lá. Cây là nguồn thức ăn giàu mật cho ong trong mùa hè." },
      { id: "canna", name: "Dong riềng cảnh", latin: "Canna indica", wikiTitle: "Canna indica", group: "tropical", label: "Nhiệt đới", color: "Đỏ · cam · vàng", swatch: "#d76545", origin: "Trung và Nam Mỹ", season: "Mùa hè đến thu", habitat: "Đất ẩm, nhiều nắng", meaning: "Sáng tạo, sức sống và niềm vui.", description: "Dong riềng cảnh có lá lớn và hoa rực màu trên thân cao. Cây mọc từ thân rễ, ưa ấm và thường được trồng ở bờ ao hoặc vườn nhiệt đới." },
      { id: "calla-lily", name: "Rum trắng", latin: "Zantedeschia aethiopica", wikiTitle: "Zantedeschia aethiopica", group: "garden", label: "Hoa vườn", color: "Trắng", swatch: "#eeeadd", origin: "Nam Phi", season: "Cuối đông đến xuân", habitat: "Đất ẩm, nắng nhẹ", meaning: "Thanh nhã, sáng rõ và trang trọng.", description: "Phần trắng hình phễu của hoa rum là mo bao quanh trục hoa màu vàng. Cây ưa ẩm và có thể sinh trưởng ở ven vùng đất ngập nước." },
      { id: "cyclamen", name: "Anh thảo", latin: "Cyclamen persicum", wikiTitle: "Cyclamen persicum", group: "seasonal", label: "Theo mùa", color: "Hồng · đỏ · trắng", swatch: "#d8798a", origin: "Đông Địa Trung Hải", season: "Mùa mát đến đầu xuân", habitat: "Bóng râm nhẹ, đất thoát nước", meaning: "Chân thành, dịu dàng và bền lòng.", description: "Cánh hoa anh thảo thường cong ngược lên trên những chiếc lá hình tim. Cây trồng chậu ưa mát; củ và các phần khác không nên ăn." },
      { id: "daphne", name: "Thụy hương", latin: "Daphne odora", wikiTitle: "Daphne odora", group: "garden", label: "Hoa vườn", color: "Hồng · trắng", swatch: "#d28795", origin: "Trung Quốc, Nhật Bản", season: "Cuối đông đến đầu xuân", habitat: "Bóng râm nhẹ, đất giàu mùn", meaning: "Nhẫn nại và vẻ đẹp kín đáo.", description: "Thụy hương là cây bụi thường xanh có chùm hoa nhỏ tỏa hương mạnh vào cuối đông. Cây nhạy với úng nước và các bộ phận có thể gây độc khi ăn." },
      { id: "delphinium", name: "Phi yến", latin: "Delphinium elatum", wikiTitle: "Delphinium elatum", group: "garden", label: "Hoa vườn", color: "Xanh · tím", swatch: "#557da7", origin: "Châu Âu và Siberia", season: "Đầu đến giữa mùa hè", habitat: "Vườn mát, đất giàu dinh dưỡng", meaning: "Cởi mở, gắn bó và khát vọng.", description: "Phi yến tạo những bông cao với nhiều hoa hình cựa xếp dọc thân. Cây ưa khí hậu mát và cần được chống đỡ; các phần của cây đều có độc." },
      { id: "heath", name: "Thạch nam mùa đông", latin: "Erica carnea", wikiTitle: "Erica carnea", group: "seasonal", label: "Theo mùa", color: "Hồng · trắng", swatch: "#cc8397", origin: "Dãy Alps và Balkan", season: "Mùa đông đến đầu xuân", habitat: "Đất chua, nơi nhiều nắng", meaning: "Bền lòng giữa nghịch cảnh.", description: "Thạch nam mùa đông là cây bụi thấp có thể nở khi thời tiết còn lạnh. Những bông hình chuông nhỏ tạo màu trên nền đất đá và là nguồn mật đầu mùa." },
      { id: "gentian", name: "Long đởm", latin: "Gentiana lutea", wikiTitle: "Gentiana lutea", group: "wild", label: "Hoa dại", color: "Vàng", swatch: "#d0ae45", origin: "Núi Trung và Nam Âu", season: "Mùa hè", habitat: "Đồng cỏ núi cao, đất đá vôi", meaning: "Kiên định và sức mạnh từ bên trong.", description: "Long đởm vàng mọc chậm ở đồng cỏ núi cao và có những vòng hoa vàng quanh thân. Rễ cây có vị đắng, từng được dùng trong đồ uống thảo mộc." },
      { id: "flame-lily", name: "Huệ lửa", latin: "Gloriosa superba", wikiTitle: "Gloriosa superba", group: "tropical", label: "Nhiệt đới", color: "Đỏ · vàng", swatch: "#cf5345", origin: "Châu Phi nhiệt đới và Nam Á", season: "Mùa mưa đến cuối hè", habitat: "Rừng thưa và bụi cây ấm", meaning: "Can đảm, nhiệt huyết và biến đổi.", description: "Huệ lửa là dây leo có cánh hoa cong ngược, chuyển màu từ vàng sang đỏ. Cây mọc từ củ và rất độc, không dùng làm dược liệu tại nhà." },
      { id: "hoya", name: "Cẩm cù", latin: "Hoya carnosa", wikiTitle: "Hoya carnosa", group: "tropical", label: "Nhiệt đới", color: "Trắng · hồng", swatch: "#e5b8c4", origin: "Đông Á và Úc", season: "Mùa ấm", habitat: "Rừng ẩm, ánh sáng gián tiếp", meaning: "Tình cảm bền lâu và chăm sóc dịu dàng.", description: "Cẩm cù là dây leo biểu sinh với chùm hoa sáp hình sao, thường có giọt mật. Cây trồng trong nhà cần ánh sáng gián tiếp và không nên cắt cuống hoa cũ." },
      { id: "impatiens", name: "Mai địa thảo", latin: "Impatiens walleriana", wikiTitle: "Impatiens walleriana", group: "garden", label: "Hoa vườn", color: "Hồng · đỏ · trắng", swatch: "#d75f82", origin: "Đông Phi", season: "Mùa ấm, nở kéo dài", habitat: "Bóng râm, đất ẩm", meaning: "Kiên nhẫn và quan tâm đến nhau.", description: "Mai địa thảo tạo hoa liên tục trong bóng râm sáng. Quả chín có thể bật mở khi chạm nhẹ, phát tán hạt ra xung quanh." },
      { id: "kalanchoe", name: "Sống đời", latin: "Kalanchoe blossfeldiana", wikiTitle: "Kalanchoe blossfeldiana", group: "garden", label: "Hoa vườn", color: "Đỏ · vàng · hồng", swatch: "#d95856", origin: "Madagascar", season: "Mùa đông đến xuân", habitat: "Nắng nhẹ, đất thoát nước", meaning: "Bền bỉ, hồi phục và trường tồn.", description: "Sống đời là cây mọng nước có chùm hoa nhỏ nhiều màu. Lá dày dự trữ nước, vì vậy cây cần đất thoát nước và thời gian khô nhẹ giữa các lần tưới." },
      { id: "lantana", name: "Ngũ sắc", latin: "Lantana camara", wikiTitle: "Lantana camara", group: "tropical", label: "Nhiệt đới", color: "Cam · hồng · vàng", swatch: "#e17b41", origin: "Trung và Nam Mỹ", season: "Quanh năm ở vùng nhiệt đới", habitat: "Đất khô, nhiều nắng", meaning: "Đa dạng, vui tươi và cởi mở.", description: "Mỗi cụm ngũ sắc gồm nhiều hoa nhỏ có thể đổi màu khi già. Cây thu hút bướm nhưng có thể xâm lấn và quả xanh độc với người, vật nuôi." },
      { id: "lupine", name: "Hoa lupin", latin: "Lupinus polyphyllus", wikiTitle: "Lupinus polyphyllus", group: "wild", label: "Hoa dại", color: "Tím · xanh · hồng", swatch: "#7169a1", origin: "Tây Bắc Bắc Mỹ", season: "Cuối xuân đến hè", habitat: "Đồng cỏ mát và ven rừng", meaning: "Hy vọng, phát triển và cộng đồng.", description: "Lupin có bông dài gồm nhiều hoa nhỏ và lá xòe như bàn tay. Rễ cộng sinh với vi khuẩn cố định đạm, giúp cây thích nghi với đất nghèo." },
      { id: "stock", name: "Hoa mã tiên", latin: "Matthiola incana", wikiTitle: "Matthiola incana", group: "garden", label: "Hoa vườn", color: "Tím · trắng · hồng", swatch: "#aa7fa8", origin: "Địa Trung Hải", season: "Mùa xuân đến hè", habitat: "Đất thoát nước, nắng nhẹ", meaning: "Lòng thủy chung và niềm vui giản dị.", description: "Mã tiên có các chùm hoa dày, hương thơm ngọt và thường được trồng làm hoa cắt cành. Cây ưa thời tiết mát hơn những ngày hè nóng." },
      { id: "sensitive-plant", name: "Trinh nữ", latin: "Mimosa pudica", wikiTitle: "Mimosa pudica", group: "tropical", label: "Nhiệt đới", color: "Hồng tím", swatch: "#cb83a1", origin: "Trung và Nam Mỹ", season: "Mùa ấm", habitat: "Đất ẩm, nhiều nắng", meaning: "Nhạy cảm, khiêm nhường và biết lắng nghe.", description: "Trinh nữ nổi tiếng vì lá cụp lại khi bị chạm hoặc rung động. Cụm hoa tròn nhỏ màu hồng tím, còn quả mang gai móc giúp phát tán." },
      { id: "nerine", name: "Huệ nhện", latin: "Nerine bowdenii", wikiTitle: "Nerine bowdenii", group: "seasonal", label: "Theo mùa", color: "Hồng", swatch: "#d56f9b", origin: "Nam Phi", season: "Cuối hè đến thu", habitat: "Đất thoát nước, nắng tốt", meaning: "Niềm vui trở lại sau mùa khô.", description: "Huệ nhện nở thành chùm trên thân gần như trơ lá, với cánh hẹp uốn lượn. Cây mọc từ củ và thường ra hoa sau giai đoạn khô hạn." },
      { id: "purple-shamrock", name: "Chua me đất tím", latin: "Oxalis triangularis", wikiTitle: "Oxalis triangularis", group: "garden", label: "Hoa vườn", color: "Trắng · hồng nhạt", swatch: "#e6cad8", origin: "Nam Mỹ", season: "Mùa ấm", habitat: "Bóng râm sáng, đất ẩm vừa", meaning: "Cân bằng, khiêm nhường và hy vọng.", description: "Chua me đất tím có lá ba thùy màu tím sẫm khép lại vào ban đêm. Hoa nhỏ màu trắng hoặc hồng nhạt mọc phía trên tán lá." },
      { id: "passionflower", name: "Lạc tiên", latin: "Passiflora caerulea", wikiTitle: "Passiflora caerulea", group: "tropical", label: "Nhiệt đới", color: "Trắng · tím xanh", swatch: "#7776a4", origin: "Nam Mỹ", season: "Mùa hè đến thu", habitat: "Dây leo, nơi nhiều nắng", meaning: "Bình an, bền chí và lòng tận tụy.", description: "Hoa lạc tiên xanh có cấu trúc phức tạp với các sợi tua xếp thành vòng. Dây leo bám bằng tua cuốn và sau hoa có thể tạo quả màu cam." },
      { id: "petunia", name: "Dạ yến thảo", latin: "Petunia × atkinsiana", wikiTitle: "Petunia", group: "garden", label: "Hoa vườn", color: "Tím · hồng · trắng", swatch: "#986eb0", origin: "Nam Mỹ", season: "Xuân đến thu", habitat: "Chậu hoặc bồn nhiều nắng", meaning: "Niềm vui, sự hòa hợp và ấm áp.", description: "Dạ yến thảo có tràng hình phễu với nhiều sắc độ. Cây ra hoa lâu nếu nhận đủ nắng và được ngắt hoa tàn định kỳ." },
      { id: "garden-phlox", name: "Phlox vườn", latin: "Phlox paniculata", wikiTitle: "Phlox paniculata", group: "garden", label: "Hoa vườn", color: "Hồng · tím · trắng", swatch: "#ca7b99", origin: "Đông Bắc Bắc Mỹ", season: "Giữa hè đến thu", habitat: "Đất ẩm, nắng nhẹ", meaning: "Hài hòa, gắn kết và dịu dàng.", description: "Phlox vườn kết thành chùm thơm, thường thu hút bướm. Cây thích đất ẩm nhưng thông thoáng để hạn chế bệnh nấm trên lá." },
      { id: "primrose", name: "Anh thảo xuân", latin: "Primula vulgaris", wikiTitle: "Primula vulgaris", group: "seasonal", label: "Theo mùa", color: "Vàng · hồng · tím", swatch: "#dfc052", origin: "Tây và Nam Âu", season: "Cuối đông đến xuân", habitat: "Bóng râm nhẹ, đất ẩm giàu mùn", meaning: "Tuổi trẻ, khởi đầu và niềm hy vọng.", description: "Anh thảo xuân mọc thành cụm thấp với hoa đơn trên cuống ngắn. Cây thường nở sớm, trước khi nhiều tán cây rụng lá khép kín khu rừng." },
      { id: "black-eyed-susan", name: "Cúc mắt đen", latin: "Rudbeckia hirta", wikiTitle: "Rudbeckia hirta", group: "wild", label: "Hoa dại", color: "Vàng · nâu", swatch: "#dda73d", origin: "Bắc Mỹ", season: "Mùa hè đến đầu thu", habitat: "Thảo nguyên và ven đường", meaning: "Lạc quan, bền bỉ và sức sống.", description: "Cúc mắt đen có cánh vàng quanh đĩa hoa nâu sẫm. Cây chịu nóng và hạn, thường được trồng trong vườn tự nhiên để thu hút côn trùng." },
      { id: "scarlet-sage", name: "Xác pháo", latin: "Salvia splendens", wikiTitle: "Salvia splendens", group: "garden", label: "Hoa vườn", color: "Đỏ tươi", swatch: "#d44748", origin: "Brazil", season: "Mùa ấm", habitat: "Vườn nắng, đất ẩm vừa", meaning: "Nhiệt huyết, dũng khí và niềm vui.", description: "Xác pháo mang bông hoa đỏ dựng thẳng, tạo điểm nhấn rõ trong bồn hoa. Nhiều giống lai có thể nở liên tục trong thời tiết ấm." },
      { id: "siberian-squill", name: "Lam tinh", latin: "Scilla siberica", wikiTitle: "Scilla siberica", group: "seasonal", label: "Theo mùa", color: "Xanh lam", swatch: "#5b82bb", origin: "Caucasus và Tây Á", season: "Đầu xuân", habitat: "Rừng thưa và vườn mát", meaning: "Hy vọng nhỏ nhoi mở đầu mùa mới.", description: "Lam tinh là cây củ thấp với những bông xanh rủ xuống. Cây nở sớm vào đầu xuân và có thể lan thành thảm dưới tán cây." },
      { id: "stonecrop", name: "Mái nhà", latin: "Sedum acre", wikiTitle: "Sedum acre", group: "wild", label: "Hoa dại", color: "Vàng", swatch: "#dcb744", origin: "Châu Âu và Tây Á", season: "Đầu đến giữa mùa hè", habitat: "Khe đá, mái nhà và đất khô", meaning: "Thích nghi và sức mạnh thầm lặng.", description: "Sedum acre là cây mọng nước thấp, phủ kín khe đá bằng lá nhỏ và hoa vàng. Cây chịu khô hạn tốt nhưng có nhựa gây kích ứng ở một số người." },
      { id: "tigridia", name: "Hổ điệp", latin: "Tigridia pavonia", wikiTitle: "Tigridia pavonia", group: "tropical", label: "Nhiệt đới", color: "Đỏ · cam · vàng", swatch: "#dc6643", origin: "Mexico và Trung Mỹ", season: "Mùa hè", habitat: "Đất thoát nước, nhiều nắng", meaning: "Vẻ đẹp độc đáo và lòng can đảm.", description: "Hổ điệp có cánh hoa lớn, tâm đốm màu nổi bật như lông chim. Mỗi bông thường chỉ tồn tại một ngày, nhưng cây lần lượt tạo nhiều nụ." },
      { id: "wishbone-flower", name: "Tô liên", latin: "Torenia fournieri", wikiTitle: "Torenia fournieri", group: "garden", label: "Hoa vườn", color: "Tím · xanh · trắng", swatch: "#746da3", origin: "Đông Nam Á", season: "Mùa ấm", habitat: "Bóng râm sáng, đất ẩm", meaning: "Niềm vui trong những góc nhỏ.", description: "Tô liên là cây thấp có hoa hình ống hai môi, thường có họng màu tương phản. Cây chịu bóng tốt và phù hợp với giỏ treo hoặc bồn râm." },
      { id: "purple-heart-plant", name: "Thài lài tím", latin: "Tradescantia pallida", wikiTitle: "Tradescantia pallida", group: "tropical", label: "Nhiệt đới", color: "Tím", swatch: "#755a91", origin: "Mexico", season: "Mùa ấm", habitat: "Đất thoát nước, nắng nhẹ", meaning: "Bền bỉ, đổi thay và sức sống.", description: "Thài lài tím có thân và lá màu tím, cùng hoa ba cánh nhỏ màu hồng tím. Cành dễ bén rễ tại các đốt khi chạm đất ẩm." },
      { id: "verbena", name: "Mã tiên thảo", latin: "Verbena officinalis", wikiTitle: "Verbena officinalis", group: "wild", label: "Hoa dại", color: "Tím nhạt", swatch: "#9284ac", origin: "Châu Âu, châu Á và Bắc Phi", season: "Mùa hè đến thu", habitat: "Đồng cỏ và bãi đất trống", meaning: "Bình an, lòng tốt và sự bền lòng.", description: "Mã tiên thảo có các hoa nhỏ mọc thành bông thon ở đầu cành. Cây thích nơi có nắng và đã được du nhập đến nhiều vùng ôn đới." },
      { id: "wisteria", name: "Tử đằng", latin: "Wisteria sinensis", wikiTitle: "Wisteria sinensis", group: "garden", label: "Hoa vườn", color: "Tím xanh", swatch: "#8b79ad", origin: "Trung Quốc", season: "Mùa xuân", habitat: "Dây leo, nắng tốt", meaning: "Gắn bó, kiên nhẫn và lời hứa dài lâu.", description: "Tử đằng tạo chùm hoa dài rủ xuống trước hoặc cùng lúc lá non xuất hiện. Dây leo khỏe, cần giàn chắc; hạt và quả có độc nếu ăn." },
      { id: "yucca", name: "Yucca", latin: "Yucca filamentosa", wikiTitle: "Yucca filamentosa", group: "wild", label: "Hoa dại", color: "Trắng kem", swatch: "#e8e4d1", origin: "Đông Nam Hoa Kỳ", season: "Đầu đến giữa mùa hè", habitat: "Đất cát khô, nhiều nắng", meaning: "Đứng vững, kiên cường và tự lập.", description: "Yucca tạo một cành hoa cao với nhiều hoa hình chuông trắng kem. Lá sợi cứng mọc thành hoa thị và cây chịu hạn tốt sau khi bén rễ." },
      { id: "crown-imperial", name: "Hoàng đế hoa", latin: "Fritillaria imperialis", wikiTitle: "Fritillaria imperialis", group: "seasonal", label: "Theo mùa", color: "Cam · đỏ · vàng", swatch: "#d97b3d", origin: "Tây Himalaya và Tây Á", season: "Mùa xuân", habitat: "Vườn mát, đất thoát nước", meaning: "Phẩm giá, dũng khí và trách nhiệm.", description: "Fritillaria imperialis có vòng hoa rủ bên dưới một chùm lá như vương miện. Củ phát ra mùi đặc trưng và cần thời gian lạnh để ra hoa." },
      { id: "peruvian-lily", name: "Ly Peru", latin: "Alstroemeria aurea", wikiTitle: "Alstroemeria aurea", group: "garden", label: "Hoa vườn", color: "Vàng · cam · đỏ", swatch: "#dc9144", origin: "Nam Mỹ", season: "Mùa hè", habitat: "Đồng cỏ núi, khí hậu mát", meaning: "Tình bạn bền lâu và sự tận tâm.", description: "Ly Peru có cánh thường điểm vệt sẫm và xoay nhẹ khi hoa nở. Cây mọc từ thân rễ và được trồng nhiều làm hoa cắt cành vì giữ được lâu." },
      { id: "scotch-broom", name: "Kim tước", latin: "Cytisus scoparius", wikiTitle: "Cytisus scoparius", group: "wild", label: "Hoa dại", color: "Vàng", swatch: "#e4c54b", origin: "Tây và Trung Âu", season: "Cuối xuân đến hè", habitat: "Đất cát, đồi khô", meaning: "Hy vọng và sức sống giản dị.", description: "Kim tước là cây bụi có nhiều cành xanh và hoa vàng hình bướm. Cây cố định đạm nhưng có thể xâm lấn ngoài vùng bản địa; hạt không ăn được." },
      { id: "giant-allium", name: "Hành cảnh khổng lồ", latin: "Allium giganteum", wikiTitle: "Allium giganteum", group: "garden", label: "Hoa vườn", color: "Tím", swatch: "#8667a1", origin: "Trung Á", season: "Cuối xuân đến đầu hè", habitat: "Vườn nắng, đất thoát nước", meaning: "Hợp nhất, cộng đồng và sức mạnh chung.", description: "Hành cảnh khổng lồ mang hàng trăm hoa nhỏ thành quả cầu tím trên thân cao. Cây mọc từ củ và thuộc cùng chi với hành ăn, tỏi." },
      { id: "nasturtium", name: "Sen cạn", latin: "Tropaeolum majus", wikiTitle: "Tropaeolum majus", group: "garden", label: "Hoa vườn", color: "Cam · đỏ · vàng", swatch: "#e2763c", origin: "Nam Mỹ", season: "Xuân đến thu", habitat: "Đất nghèo vừa, nắng nhẹ", meaning: "Gan dạ, nhiệt thành và tự do.", description: "Sen cạn có lá tròn và hoa hình phễu với cựa dài phía sau. Hoa và lá có vị cay nhẹ, nhưng chỉ sử dụng làm thực phẩm khi cây được trồng an toàn." },
      { id: "chrysanthemum-indicum", name: "Cúc dại Trung Quốc", latin: "Chrysanthemum indicum", wikiTitle: "Chrysanthemum indicum", family: "Asteraceae", genus: "Chrysanthemum", growthForm: "Thân thảo", group: "wild", label: "Họ Cúc", color: "Vàng", swatch: "#d9b44c", origin: "Đông Á", season: "Cuối hè đến thu", habitat: "Sườn đồi và bìa rừng", meaning: "Bền bỉ và gần gũi với thiên nhiên.", description: "Cúc dại Trung Quốc là loài thân thảo lâu năm, mang cụm hoa vàng nhỏ. Loài này là họ hàng gần của các giống cúc trồng và thường sinh trưởng ở nơi nhiều nắng." },
      { id: "crown-daisy", name: "Cúc ăn lá", latin: "Glebionis coronaria", wikiTitle: "Glebionis coronaria", family: "Asteraceae", genus: "Glebionis", growthForm: "Thân thảo", group: "garden", label: "Họ Cúc", color: "Vàng · trắng", swatch: "#e1c74d", origin: "Địa Trung Hải và Đông Á", season: "Mùa mát", habitat: "Ruộng vườn, đất thoát nước", meaning: "Sự giản dị và sức sống.", description: "Cúc ăn lá còn gọi là tần ô ở một số vùng, có hoa vàng hoặc vàng trắng. Lá non được dùng làm rau tại nhiều nền ẩm thực Đông Á." },
      { id: "shasta-daisy", name: "Cúc Shasta", latin: "Leucanthemum × superbum", wikiTitle: "Leucanthemum × superbum", family: "Asteraceae", genus: "Leucanthemum", growthForm: "Thân thảo", group: "garden", label: "Họ Cúc", color: "Trắng · vàng", swatch: "#e8e1bc", origin: "Giống lai làm vườn, phát triển tại Hoa Kỳ", season: "Đầu hè đến thu", habitat: "Bồn hoa nhiều nắng", meaning: "Trong sáng và niềm vui giản dị.", description: "Cúc Shasta có cánh trắng quanh tâm vàng và được lai tạo để trồng vườn. Cắt bỏ cụm hoa tàn thường giúp cây tiếp tục tạo nụ." },
      { id: "feverfew", name: "Cúc thơm", latin: "Tanacetum parthenium", wikiTitle: "Tanacetum parthenium", family: "Asteraceae", genus: "Tanacetum", growthForm: "Thân thảo", group: "garden", label: "Họ Cúc", color: "Trắng · vàng", swatch: "#e7dfbd", origin: "Đông Nam châu Âu", season: "Đầu hè đến thu", habitat: "Vườn nắng, đất thoát nước", meaning: "Tươi mới và bền bỉ.", description: "Cúc thơm tạo nhiều đầu hoa nhỏ giống cúc dại trên thân phân nhánh. Cây có mùi thơm đặc trưng; không nên tự ý dùng làm thuốc vì có thể gây phản ứng phụ." },
      { id: "calendula", name: "Cúc kim tiền", latin: "Calendula officinalis", wikiTitle: "Calendula officinalis", family: "Asteraceae", genus: "Calendula", growthForm: "Thân thảo", group: "garden", label: "Họ Cúc", color: "Vàng · cam", swatch: "#e89943", origin: "Nam Âu và Địa Trung Hải", season: "Mùa mát đến đầu hè", habitat: "Vườn nắng, đất tơi xốp", meaning: "Ấm áp, lạc quan và hào phóng.", description: "Cúc kim tiền có cụm hoa vàng cam và cánh hoa xếp thành nhiều vòng. Cây dễ gieo hạt, thường được trồng làm cảnh trong vườn mùa mát." },
      { id: "strawflower", name: "Cúc bất tử", latin: "Xerochrysum bracteatum", wikiTitle: "Xerochrysum bracteatum", family: "Asteraceae", genus: "Xerochrysum", growthForm: "Thân thảo", group: "garden", label: "Họ Cúc", color: "Vàng · cam · hồng", swatch: "#d9944d", origin: "Australia", season: "Mùa hè", habitat: "Đồng cỏ khô, nhiều nắng", meaning: "Bền lâu và không phai.", description: "Cúc bất tử có lá bắc khô, cứng như giấy nên giữ màu lâu sau khi cắt. Cây thích nghi với khí hậu nhiều nắng và đất thoát nước." },
      { id: "oxeye-daisy", name: "Cúc mắt bò", latin: "Leucanthemum vulgare", wikiTitle: "Leucanthemum vulgare", family: "Asteraceae", genus: "Leucanthemum", growthForm: "Thân thảo", group: "wild", label: "Họ Cúc", color: "Trắng · vàng", swatch: "#e6dfbf", origin: "Châu Âu và vùng ôn đới châu Á", season: "Cuối xuân đến hè", habitat: "Đồng cỏ và ven đường", meaning: "Trong sáng và sức sống tự nhiên.", description: "Cúc mắt bò là loài cúc dại lâu năm với cánh trắng và tâm vàng. Cây mọc trên đồng cỏ, nhưng tại một số nơi ngoài vùng bản địa có thể lan rộng." },
      { id: "damask-rose", name: "Hồng Damask", latin: "Rosa × damascena", wikiTitle: "Rosa × damascena", family: "Rosaceae", genus: "Rosa", growthForm: "Thân gỗ", group: "garden", label: "Hoa hồng", color: "Hồng · đỏ nhạt", swatch: "#ce7896", origin: "Tây Á", season: "Cuối xuân đến hè", habitat: "Cây bụi ở vùng ôn đới", meaning: "Hương thơm, tình yêu và vẻ đẹp cổ điển.", description: "Hồng Damask là nhóm hoa hồng cổ nổi tiếng với hương thơm, được trồng để chiết xuất tinh dầu và nước hoa hồng. Cây mọc dạng bụi thân gỗ có gai." },
      { id: "dog-rose", name: "Tầm xuân", latin: "Rosa canina", wikiTitle: "Rosa canina", family: "Rosaceae", genus: "Rosa", growthForm: "Thân gỗ", group: "wild", label: "Hoa hồng", color: "Hồng nhạt · trắng", swatch: "#dca2b3", origin: "Châu Âu, Tây Á và Bắc Phi", season: "Đầu hè", habitat: "Hàng rào, bìa rừng và bụi cây", meaning: "Sức sống tự nhiên và sự chở che.", description: "Tầm xuân là loài hồng dại dạng bụi leo, hoa thường có năm cánh đơn. Quả đỏ cam hình thành vào cuối mùa hè và là nguồn thức ăn cho chim." },
      { id: "rugosa-rose", name: "Hồng Nhật", latin: "Rosa rugosa", wikiTitle: "Rosa rugosa", family: "Rosaceae", genus: "Rosa", growthForm: "Thân gỗ", group: "garden", label: "Hoa hồng", color: "Hồng · trắng · tím", swatch: "#c87596", origin: "Đông Bắc Á", season: "Mùa hè đến đầu thu", habitat: "Bụi cây ven biển, đất cát", meaning: "Bền bỉ và giản dị.", description: "Hồng Nhật có lá nhăn gân sâu, hoa đơn thơm và quả lớn. Cây chịu gió mặn, thường được trồng làm hàng rào nhưng có thể lan mạnh ngoài vùng bản địa." },
      { id: "china-rose", name: "Hồng Trung Quốc", latin: "Rosa chinensis", wikiTitle: "Rosa chinensis", family: "Rosaceae", genus: "Rosa", growthForm: "Thân gỗ", group: "garden", label: "Hoa hồng", color: "Đỏ · hồng", swatch: "#ce536f", origin: "Trung Quốc", season: "Xuân đến thu, tùy giống", habitat: "Cây bụi ở vườn ôn đới ấm", meaning: "Tươi mới và tình cảm lâu bền.", description: "Hồng Trung Quốc và các giống liên quan đóng vai trò quan trọng trong lịch sử lai tạo hoa hồng hiện đại. Nhiều giống có khả năng nở lặp lại trong mùa." },
      { id: "banksia-rose", name: "Hồng Banks", latin: "Rosa banksiae", wikiTitle: "Rosa banksiae", family: "Rosaceae", genus: "Rosa", growthForm: "Dây leo thân gỗ", group: "garden", label: "Hoa hồng", color: "Trắng · vàng nhạt", swatch: "#e8d7a7", origin: "Trung Quốc", season: "Giữa đến cuối mùa xuân", habitat: "Dây leo trên giàn và tường nắng", meaning: "Phóng khoáng và sung túc.", description: "Hồng Banks là dây leo thân gỗ ít gai, có thể phủ rộng giàn với nhiều hoa nhỏ mọc thành chùm. Cây nở rộ theo mùa, thường chỉ một đợt chính." },
      { id: "tea-rose", name: "Hồng trà", latin: "Rosa odorata", wikiTitle: "Rosa odorata", family: "Rosaceae", genus: "Rosa", growthForm: "Thân gỗ", group: "garden", label: "Hoa hồng", color: "Hồng · vàng nhạt", swatch: "#d993a7", origin: "Đông Á", season: "Xuân đến thu", habitat: "Cây bụi ở vườn ấm", meaning: "Thanh nhã và tinh tế.", description: "Nhóm hồng trà có hương gợi lá trà và là một nhánh quan trọng của hoa hồng vườn. Cây bụi thân gỗ thường nở nhiều đợt trong điều kiện thích hợp." },
      { id: "cattleya", name: "Lan Cattleya", latin: "Cattleya labiata", wikiTitle: "Cattleya labiata", family: "Orchidaceae", genus: "Cattleya", growthForm: "Biểu sinh", group: "tropical", label: "Họ Lan", color: "Tím · hồng · trắng", swatch: "#a482bd", origin: "Đông Bắc Brazil", season: "Cuối hè đến thu", habitat: "Bám trên cây ở rừng nhiệt đới", meaning: "Vẻ đẹp rực rỡ và thanh lịch.", description: "Cattleya labiata là lan biểu sinh có hoa lớn, môi hoa thường nổi bật với sắc tím. Rễ cần thông thoáng; cây không sống trong đất vườn thông thường." },
      { id: "dendrobium", name: "Lan hoàng thảo", latin: "Dendrobium nobile", wikiTitle: "Dendrobium nobile", family: "Orchidaceae", genus: "Dendrobium", growthForm: "Biểu sinh", group: "tropical", label: "Họ Lan", color: "Trắng · tím · hồng", swatch: "#aa8cbd", origin: "Himalaya và Đông Nam Á", season: "Cuối đông đến xuân", habitat: "Bám trên thân cây, vùng núi ẩm", meaning: "Kiên trì và duyên dáng.", description: "Hoàng thảo là lan biểu sinh có giả hành dài, thường ra hoa dọc thân sau một giai đoạn nghỉ mát và khô hơn. Màu hoa thay đổi theo giống." },
      { id: "vanda", name: "Lan Vanda", latin: "Vanda coerulea", wikiTitle: "Vanda coerulea", family: "Orchidaceae", genus: "Vanda", growthForm: "Biểu sinh", group: "tropical", label: "Họ Lan", color: "Xanh tím", swatch: "#7f8fc0", origin: "Himalaya phía Đông và Đông Nam Á", season: "Thu đến đông", habitat: "Rừng núi ẩm, rễ lộ trong không khí", meaning: "Độc đáo và tinh tế.", description: "Vanda coerulea được biết đến với sắc xanh tím hiếm gặp trong lan. Loài biểu sinh có rễ khí sinh lớn và cần ánh sáng mạnh nhưng không chịu nắng gắt kéo dài." },
      { id: "slipper-orchid", name: "Lan hài", latin: "Paphiopedilum insigne", wikiTitle: "Paphiopedilum insigne", family: "Orchidaceae", genus: "Paphiopedilum", growthForm: "Thân thảo", group: "tropical", label: "Họ Lan", color: "Xanh · nâu · vàng", swatch: "#8c916d", origin: "Đông Bắc Ấn Độ và Bangladesh", season: "Mùa đông", habitat: "Tầng đất mùn và đá vôi trong rừng", meaning: "Khác biệt và bền bỉ.", description: "Lan hài có cánh môi phồng thành túi giống chiếc hài. Khác nhiều lan trồng phổ biến, một số loài Paphiopedilum mọc trên mặt đất hoặc đá, không phải biểu sinh." },
      { id: "cymbidium", name: "Lan kiếm", latin: "Cymbidium ensifolium", wikiTitle: "Cymbidium ensifolium", family: "Orchidaceae", genus: "Cymbidium", growthForm: "Thân thảo", group: "tropical", label: "Họ Lan", color: "Vàng xanh · nâu", swatch: "#a4a66c", origin: "Đông Á và Đông Nam Á", season: "Cuối hè đến thu", habitat: "Sườn núi và rừng thưa", meaning: "Điềm đạm và thanh nhã.", description: "Lan kiếm có lá dài hình lưỡi kiếm và chùm hoa thơm. Nhiều Cymbidium mọc trên đất mùn, khác với các loài lan sống bám trên thân cây." },
      { id: "vanilla-orchid", name: "Lan vani", latin: "Vanilla planifolia", wikiTitle: "Vanilla planifolia", family: "Orchidaceae", genus: "Vanilla", growthForm: "Dây leo thân thảo", group: "tropical", label: "Họ Lan", color: "Vàng xanh", swatch: "#b6a76a", origin: "Mexico và Trung Mỹ", season: "Mùa xuân đến hè", habitat: "Dây leo trong rừng nhiệt đới ẩm", meaning: "Hương vị đặc biệt và sự kiên nhẫn.", description: "Lan vani là dây leo thuộc họ Orchidaceae; quả nang sau thụ phấn được xử lý để tạo gia vị vani. Hoa thường nở ngắn và cần thụ phấn thích hợp." },
      { id: "oncidium", name: "Lan vũ nữ", latin: "Oncidium sphacelatum", wikiTitle: "Oncidium sphacelatum", family: "Orchidaceae", genus: "Oncidium", growthForm: "Biểu sinh", group: "tropical", label: "Họ Lan", color: "Vàng · nâu", swatch: "#d0a34d", origin: "Mexico đến Trung Mỹ", season: "Mùa xuân đến hè", habitat: "Bám trên cây trong rừng ấm", meaning: "Vui tươi và chuyển động.", description: "Lan vũ nữ có chùm hoa phân nhánh với nhiều bông nhỏ vàng nâu. Cánh môi rộng khiến cụm hoa trông như những dáng người đang chuyển động." },
      { id: "plum-blossom", name: "Mai hoa", latin: "Prunus mume", wikiTitle: "Prunus mume", family: "Rosaceae", genus: "Prunus", growthForm: "Thân gỗ · cây nhỏ", height: "Khoảng 4–10 m", group: "seasonal", label: "Văn hóa Trung Hoa", culturalNote: "Mai hoa là một trong Tứ quân tử trong hội họa và thơ ca Trung Hoa, tượng trưng cho sức sống, khí tiết và sự khởi đầu mùa xuân.", color: "Trắng · hồng · đỏ", swatch: "#df9bb3", origin: "Trung Quốc", season: "Cuối đông đến đầu xuân", habitat: "Cây gỗ nhỏ ở vườn và sườn đồi ôn đới", meaning: "Khí tiết, bền chí và hy vọng.", description: "Prunus mume là cây gỗ nhỏ rụng lá, nở hoa thơm trên cành trơ lá khi trời còn lạnh. Quả mơ được dùng trong ẩm thực Đông Á." },
      { id: "wintersweet", name: "Lạp mai", latin: "Chimonanthus praecox", wikiTitle: "Chimonanthus praecox", family: "Calycanthaceae", genus: "Chimonanthus", growthForm: "Thân gỗ · cây bụi lớn", height: "Khoảng 2–4 m", group: "seasonal", label: "Văn hóa Trung Hoa", culturalNote: "Lạp mai nở giữa mùa đông, thường được trồng trong vườn cổ Trung Hoa như biểu tượng của sự kiên nhẫn và hương thơm trong giá lạnh.", color: "Vàng sáp", swatch: "#d6b95e", origin: "Trung Quốc", season: "Mùa đông đến đầu xuân", habitat: "Cây bụi gỗ ở vườn ôn đới", meaning: "Kiên nhẫn và thanh cao.", description: "Lạp mai là cây bụi thân gỗ rụng lá, cho hoa vàng sáp thơm khi nhiều cây khác đang ngủ đông. Không cùng chi với mai hoa Prunus mume." },
      { id: "peach-blossom", name: "Đào hoa", latin: "Prunus persica", wikiTitle: "Prunus persica", family: "Rosaceae", genus: "Prunus", growthForm: "Thân gỗ · cây ăn quả", height: "Khoảng 4–10 m", group: "seasonal", label: "Văn hóa Trung Hoa", culturalNote: "Hoa đào gắn với mùa xuân, sự sinh sôi và may mắn trong văn hóa Trung Hoa; đào tiên cũng xuất hiện trong nhiều truyện dân gian và hội họa.", color: "Hồng · trắng", swatch: "#e99ab5", origin: "Trung Quốc; được trồng rộng khắp", season: "Đầu xuân", habitat: "Vườn cây ăn quả ở vùng ôn đới", meaning: "Mùa xuân, sinh khí và may mắn.", description: "Đào là cây gỗ rụng lá, thường nở hoa hồng trước khi ra lá. Cây vừa có giá trị làm cảnh vừa cho quả; cần mùa đông đủ mát để phân hóa nụ." },
      { id: "chinese-crabapple", name: "Hải đường Trung Hoa", latin: "Malus spectabilis", wikiTitle: "Malus spectabilis", family: "Rosaceae", genus: "Malus", growthForm: "Thân gỗ · cây nhỏ", height: "Khoảng 4–8 m", group: "garden", label: "Văn hóa Trung Hoa", culturalNote: "Hải đường là hình ảnh quen thuộc trong vườn cổ và tranh hoa điểu Trung Hoa, thường gợi vẻ đẹp thanh nhã và phú quý.", color: "Hồng nhạt · trắng", swatch: "#e7a6bb", origin: "Trung Quốc", season: "Giữa mùa xuân", habitat: "Cây gỗ nhỏ trong vườn ôn đới", meaning: "Thanh nhã và phú quý.", description: "Malus spectabilis là cây gỗ nhỏ rụng lá, nở chùm hoa hồng nhạt rồi chuyển trắng. Tán cây phù hợp với vườn cảnh và có thể tạo quả nhỏ." },
      { id: "yulan-magnolia", name: "Ngọc lan trắng", latin: "Magnolia denudata", wikiTitle: "Magnolia denudata", family: "Magnoliaceae", genus: "Magnolia", growthForm: "Thân gỗ · cây gỗ lớn", height: "Khoảng 10–15 m", group: "garden", label: "Văn hóa Trung Hoa", culturalNote: "Ngọc lan trắng được trồng lâu đời trong vườn chùa và cung đình Trung Hoa; hoa trắng nở trên cành trơ lá thường tượng trưng cho sự tinh khiết và thanh nhã.", color: "Trắng", swatch: "#ede8db", origin: "Trung và Đông Trung Quốc", season: "Cuối đông đến đầu xuân", habitat: "Cây gỗ rụng lá ở vườn và sườn núi", meaning: "Tinh khiết và cao nhã.", description: "Magnolia denudata là cây gỗ rụng lá có thể cao hơn 10 m. Hoa trắng lớn nở trước khi lá xuất hiện; cây cần khoảng trống cho tán và bộ rễ phát triển." },
      { id: "tree-peony", name: "Mẫu đơn thân gỗ", latin: "Paeonia suffruticosa", wikiTitle: "Paeonia suffruticosa", family: "Paeoniaceae", genus: "Paeonia", growthForm: "Thân gỗ · cây bụi", height: "Khoảng 1–2 m", group: "garden", label: "Văn hóa Trung Hoa", culturalNote: "Mẫu đơn thân gỗ được tôn vinh trong nghệ thuật, thơ ca và vườn cảnh Trung Hoa như biểu tượng của phú quý, danh giá và mùa xuân.", color: "Đỏ · hồng · tím · trắng", swatch: "#ce7896", origin: "Trung Quốc", season: "Giữa đến cuối mùa xuân", habitat: "Cây bụi gỗ rụng lá trong vườn ôn đới", meaning: "Phú quý và vẻ đẹp viên mãn.", description: "Khác với mẫu đơn thân thảo, Paeonia suffruticosa giữ cành hóa gỗ qua mùa đông và mọc thành bụi. Hoa lớn có thể rộng hơn 15 cm; cây ưa khí hậu có mùa đông lạnh." },
      { id: "crape-myrtle", name: "Tử vi", latin: "Lagerstroemia indica", wikiTitle: "Lagerstroemia indica", family: "Lythraceae", genus: "Lagerstroemia", growthForm: "Thân gỗ · cây nhỏ", height: "Khoảng 3–8 m", group: "garden", label: "Văn hóa Trung Hoa", culturalNote: "Tử vi được trồng trong vườn và dọc phố ở Trung Quốc; hoa nở lâu vào mùa hè, gắn với cảnh quan văn nhân và sân vườn truyền thống.", color: "Hồng · tím · đỏ · trắng", swatch: "#cb83a7", origin: "Trung Quốc và Đông Á", season: "Mùa hè đến đầu thu", habitat: "Cây gỗ nhỏ ở nơi nắng ấm", meaning: "Thanh nhã và sức sống dài lâu.", description: "Tử vi là cây gỗ nhỏ rụng lá với vỏ thân nhẵn, thường bong thành mảng. Chùm hoa nhăn như giấy có thể kéo dài nhiều tuần trong thời tiết ấm." },
      { id: "yunnan-camellia", name: "Trà mi Vân Nam", latin: "Camellia reticulata", wikiTitle: "Camellia reticulata", family: "Theaceae", genus: "Camellia", growthForm: "Thân gỗ · cây nhỏ", height: "Khoảng 5–10 m", group: "garden", label: "Văn hóa Trung Hoa", culturalNote: "Trà mi Vân Nam được tuyển chọn và trồng trong vườn cảnh Tây Nam Trung Quốc; các giống hoa lớn là di sản làm vườn của vùng.", color: "Đỏ · hồng", swatch: "#c95672", origin: "Tây Nam Trung Quốc", season: "Cuối đông đến đầu xuân", habitat: "Cây gỗ nhỏ vùng núi ấm, ẩm", meaning: "Thanh nhã và bền bỉ.", description: "Camellia reticulata là cây gỗ nhỏ thường xanh, lá có gân nổi dạng lưới và hoa lớn. Cây cần đất chua, thoát nước tốt và tránh nắng trưa gay gắt." },
      { id: "japanese-honeysuckle", name: "Kim ngân hoa", latin: "Lonicera japonica", wikiTitle: "Lonicera japonica", family: "Caprifoliaceae", genus: "Lonicera", growthForm: "Dây leo thân gỗ", height: "Dây leo dài khoảng 5–10 m", group: "wild", label: "Văn hóa Trung Hoa", culturalNote: "Kim ngân hoa có lịch sử sử dụng trong y học cổ truyền Trung Hoa; cần phân biệt giá trị văn hóa với bằng chứng điều trị và không tự ý dùng làm thuốc.", color: "Trắng chuyển vàng", swatch: "#d9c879", origin: "Đông Á, gồm Trung Quốc, Nhật Bản và Hàn Quốc", season: "Cuối xuân đến hè", habitat: "Dây leo ở bìa rừng và hàng rào", meaning: "Gắn bó và sức sống dẻo dai.", description: "Kim ngân là dây leo thân gỗ, hoa thơm đổi từ trắng sang vàng khi già. Ở nhiều vùng ngoài bản địa, cây có thể xâm lấn mạnh." },
      { id: "chinese-scholar-tree", name: "Hoa hòe", latin: "Styphnolobium japonicum", wikiTitle: "Styphnolobium japonicum", family: "Fabaceae", genus: "Styphnolobium", growthForm: "Thân gỗ · cây đại thụ", height: "Thường 15–25 m", group: "garden", label: "Văn hóa Trung Hoa", culturalNote: "Hòe cổ thụ thường được trồng trong sân đình, trường học và khu dân cư Trung Quốc; trong văn hóa xưa, cây gắn với học hành và đường quan lộ.", color: "Trắng kem", swatch: "#e7dfc8", origin: "Trung Quốc và Đông Á", season: "Giữa đến cuối mùa hè", habitat: "Cây phố và sân vườn rộng, chịu hạn", meaning: "Học vấn và sự thành đạt.", description: "Hoa hòe là cây gỗ lớn có tán rộng, thường cao 15–25 m. Chùm hoa trắng kem nở giữa mùa hè; cây trưởng thành cần không gian trồng rộng." },
      { id: "saucer-magnolia", name: "Mộc lan Soulange", latin: "Magnolia × soulangeana", wikiTitle: "Magnolia × soulangeana", family: "Magnoliaceae", genus: "Magnolia", growthForm: "Thân gỗ · cây nhỏ", height: "Khoảng 5–8 m", group: "garden", label: "Cây thân gỗ", color: "Trắng · hồng tím", swatch: "#d8a2bc", origin: "Giống lai làm vườn, tạo tại Pháp", season: "Đầu đến giữa mùa xuân", habitat: "Cây gỗ nhỏ ở vườn ôn đới", meaning: "Thanh nhã và khởi đầu mùa mới.", colorNote: "Hoa nở trên cành trước khi lá ra.", description: "Mộc lan Soulange là cây gỗ nhỏ lai giữa hai loài mộc lan châu Á. Khi trưởng thành có tán rộng và rất nhiều hoa hình chén; nên trồng nơi đủ khoảng trống." },
      { id: "kobus-magnolia", name: "Mộc lan Kobus", latin: "Magnolia kobus", wikiTitle: "Magnolia kobus", family: "Magnoliaceae", genus: "Magnolia", growthForm: "Thân gỗ · cây gỗ lớn", height: "Khoảng 10–15 m", group: "garden", label: "Cây thân gỗ", color: "Trắng", swatch: "#e7e3d6", origin: "Nhật Bản và bán đảo Triều Tiên", season: "Đầu xuân", habitat: "Rừng ôn đới và công viên rộng", meaning: "Thanh khiết và sức sống đầu mùa.", description: "Mộc lan Kobus là cây gỗ rụng lá có thể cao hơn 10 m. Hoa trắng thơm nở trước lá; cây non thường cần nhiều năm mới bắt đầu ra hoa." },
      { id: "jacaranda", name: "Phượng tím", latin: "Jacaranda mimosifolia", wikiTitle: "Jacaranda mimosifolia", family: "Bignoniaceae", genus: "Jacaranda", growthForm: "Thân gỗ · cây đại thụ", height: "Khoảng 10–20 m", group: "garden", label: "Cây thân gỗ", color: "Tím xanh", swatch: "#8d83bb", origin: "Nam Mỹ", season: "Cuối xuân đến đầu hè", habitat: "Cây đường phố ở khí hậu cận nhiệt đới", meaning: "Mộng mơ và đổi thay.", description: "Phượng tím là cây gỗ tán rộng, có thể cao 10–20 m. Khi hoa nở rộ, tán cây phủ màu tím xanh; rễ và cành cần khoảng không đô thị phù hợp." },
      { id: "flamboyant", name: "Phượng vĩ", latin: "Delonix regia", wikiTitle: "Delonix regia", family: "Fabaceae", genus: "Delonix", growthForm: "Thân gỗ · cây đại thụ", height: "Khoảng 10–15 m, tán có thể rộng hơn chiều cao", group: "garden", label: "Cây thân gỗ", color: "Đỏ cam", swatch: "#dc6749", origin: "Madagascar", season: "Cuối xuân đến hè", habitat: "Vùng nhiệt đới khô theo mùa", meaning: "Rực rỡ, tự do và tuổi học trò.", description: "Phượng vĩ là cây gỗ lớn có tán dù rộng và chùm hoa đỏ cam. Cây cần không gian rộng, nắng nhiều và mùa khô tương đối rõ để ra hoa đẹp." },
      { id: "golden-shower-tree", name: "Muồng hoàng yến", latin: "Cassia fistula", wikiTitle: "Cassia fistula", family: "Fabaceae", genus: "Cassia", growthForm: "Thân gỗ · cây đại thụ", height: "Khoảng 8–15 m", group: "tropical", label: "Cây thân gỗ", color: "Vàng", swatch: "#e0bd4e", origin: "Nam Á", season: "Cuối xuân đến hè", habitat: "Rừng khô nhiệt đới và đường phố nhiều nắng", meaning: "Thịnh vượng và tươi sáng.", description: "Muồng hoàng yến là cây gỗ rụng lá, mang những chùm hoa vàng rủ dài. Cây trưởng thành tạo tán rộng và thường nở rộ vào đầu mùa mưa." },
      { id: "pink-trumpet-tree", name: "Kèn hồng", latin: "Handroanthus impetiginosus", wikiTitle: "Handroanthus impetiginosus", family: "Bignoniaceae", genus: "Handroanthus", growthForm: "Thân gỗ · cây đại thụ", height: "Khoảng 8–15 m", group: "garden", label: "Cây thân gỗ", color: "Hồng tím", swatch: "#d78cab", origin: "Trung và Nam Mỹ", season: "Cuối mùa khô đến đầu xuân", habitat: "Rừng nhiệt đới khô và đại lộ nắng", meaning: "Hy vọng và sức sống sau mùa khô.", description: "Kèn hồng là cây gỗ rụng lá; hoa hình loa kèn thường nở dày khi cành còn trơ lá. Cây trưởng thành có thể cao hơn 10 m và cần khoảng trống cho tán." },
      { id: "african-tulip-tree", name: "Đoạn trường", latin: "Spathodea campanulata", wikiTitle: "Spathodea campanulata", family: "Bignoniaceae", genus: "Spathodea", growthForm: "Thân gỗ · cây đại thụ", height: "Khoảng 10–25 m", group: "tropical", label: "Cây thân gỗ", color: "Đỏ cam", swatch: "#d95e43", origin: "Châu Phi nhiệt đới", season: "Mùa khô đến đầu mùa mưa", habitat: "Rừng nhiệt đới ẩm và công viên", meaning: "Sức sống mạnh mẽ và sắc màu nhiệt đới.", description: "Đoạn trường là cây gỗ lớn có tán rộng và chùm hoa hình chuông đỏ cam. Cây được trồng làm cảnh ở vùng nhiệt đới nhưng có thể xâm lấn tại một số nơi." },
      { id: "silk-floss-tree", name: "Gạo Nam Mỹ", latin: "Ceiba speciosa", wikiTitle: "Ceiba speciosa", family: "Malvaceae", genus: "Ceiba", growthForm: "Thân gỗ · cây đại thụ", height: "Khoảng 10–20 m", group: "garden", label: "Cây thân gỗ", color: "Hồng · trắng", swatch: "#d5839d", origin: "Nam Mỹ", season: "Cuối hè đến thu", habitat: "Rừng nhiệt đới khô theo mùa", meaning: "Bảo vệ và sức sống.", description: "Ceiba speciosa là cây gỗ lớn có thân phình và gai hình nón. Hoa hồng nhạt nở khi cây ít lá; quả chứa sợi bông giúp phát tán hạt." },
      { id: "lily-of-the-valley", name: "Lan chuông", latin: "Convallaria majalis", wikiTitle: "Convallaria majalis", family: "Asparagaceae", genus: "Convallaria", growthForm: "Thân thảo", height: "Khoảng 15–25 cm", group: "seasonal", label: "Theo mùa", color: "Trắng", swatch: "#eee9d9", origin: "Châu Âu và vùng ôn đới châu Á", season: "Giữa mùa xuân", habitat: "Rừng râm mát, đất giàu mùn", meaning: "Niềm vui trở lại và sự khiêm nhường.", description: "Lan chuông mọc thành thảm thấp, mỗi cành mang các hoa trắng hình chuông thơm. Toàn cây có độc nếu ăn phải, kể cả quả đỏ." },
      { id: "white-water-lily", name: "Súng trắng", latin: "Nymphaea alba", wikiTitle: "Nymphaea alba", family: "Nymphaeaceae", genus: "Nymphaea", growthForm: "Thủy sinh", height: "Lá và hoa nổi trên mặt nước", group: "wild", label: "Hoa dại", color: "Trắng · vàng", swatch: "#ece9df", origin: "Châu Âu, Bắc Phi và Tây Á", season: "Mùa hè", habitat: "Ao hồ nước ngọt yên tĩnh", meaning: "Tĩnh lặng và trong sáng.", description: "Súng trắng là cây thủy sinh có thân rễ dưới bùn, lá và hoa nổi trên mặt nước. Khác hoa sen, hoa súng thường nằm sát mặt nước và có khe mở ở cuống lá." }
    ];

    const verifiedImageFallbacks = {
      rose: {
        thumbnail: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Abracadabra_Rose.jpg/500px-Abracadabra_Rose.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        sourceTitle: "Hybrid rose (Rosa hybrida)",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Abracadabra_Rose.jpg",
        imageCredit: "SSW.Regina · CC BY-SA 4.0 · Wikimedia Commons"
      }
    };
    const seasonalStories = [
      { id: "cherry", title: "Xuân dừng lại trên cành anh đào", poem: "Cánh hoa khẽ chạm gió, trời như chậm lại một nhịp; sắc hồng đi qua mà mùa xuân còn ở trong lòng." },
      { id: "peach-blossom", title: "Vạn dặm đào hoa trong mưa hạ", poem: "Qua vạn dặm, cánh đào nhẹ khép trong mưa hạ; sắc hồng vẫn giữ một miền xuân ở lại trong ký ức." },
      { id: "plum-blossom", title: "Mai nở trước thềm đông", poem: "Khi cành cây còn im dưới rét, một nụ mai đã lặng lẽ mở; mùa mới đôi khi bắt đầu từ điều rất nhỏ." },
      { id: "magnolia", title: "Mộc lan nâng trời xuân", poem: "Từ thân cây vững chãi, đóa trắng vươn lên đón nắng; vẻ dịu dàng cũng có thể lớn như một tán cây." },
      { id: "yulan-magnolia", title: "Ngọc lan trắng bên hiên cổ", poem: "Cành trơ nâng đóa ngọc lan, hương thơm đi trước chiếc lá đầu mùa." },
      { id: "tree-peony", title: "Mẫu đơn thân gỗ đón nắng", poem: "Năm tháng làm cành thêm vững, mùa xuân lại trao cho nó những tầng cánh rực rỡ." },
      { id: "lotus", title: "Sen mở cánh trên mặt hồ", poem: "Mặt nước khẽ lay, đóa sen vẫn đứng yên trong ánh sớm; trong trẻo không có nghĩa là chưa từng đi qua bùn sâu." },
      { id: "tulip", title: "Những chiếc cốc gọi mùa xuân", poem: "Tulip xếp màu trên cánh đồng, mỗi sắc hoa giữ riêng một tiếng nói của nắng." },
      { id: "sunflower", title: "Hướng dương tìm về phía sáng", poem: "Cuối ngày, cánh hoa khép lại; ngày mai, nó lại tìm thấy mặt trời." },
      { id: "chrysanthemum", title: "Cúc nở khi ngày ngắn lại", poem: "Thu về chậm trên vườn, những đóa cúc vẫn gom nắng thành từng vòng cánh." },
      { id: "lavender", title: "Oải hương tím trên triền gió", poem: "Gió đi qua đồi tím, mang theo hương dịu dàng đến tận cuối con đường." },
      { id: "protea", title: "Vương miện hoa từ miền Cape", poem: "Đất đá khô cằn vẫn nuôi một đóa hoa lớn; sức sống có hình hài riêng ở mỗi miền." },
      { id: "magnolia-kobus", title: "Mộc lan Kobus trước khi lá về", poem: "Cành cây còn trống mà hoa đã sáng; mùa xuân đến trước bằng một lời hứa trắng." },
      { id: "jacaranda", title: "Mưa tím dưới tán phượng tím", poem: "Hoa rơi thành con đường tím, mỗi bước chân đi qua như khẽ chạm một giấc mơ." },
      { id: "flamboyant", title: "Phượng vĩ thắp đỏ mùa hè", poem: "Tán phượng mở rộng trên sân trường, giữ trong bóng mát tiếng ve và những ngày chia tay." },
      { id: "wintersweet", title: "Lạp mai thơm trong gió lạnh", poem: "Hương vàng đi qua mùa đông trước khi sắc hoa kịp gọi tên mình." }
    ];
    const seasonalStoryKey = "hoa-dia-cau-last-seasonal-story-v1";

    const orchidIds = new Set(["orchid", "cattleya", "dendrobium", "vanda", "slipper-orchid", "cymbidium", "vanilla-orchid", "oncidium"]);
    const roseIds = new Set(["rose", "damask-rose", "dog-rose", "rugosa-rose", "china-rose", "banksia-rose", "tea-rose"]);
    const asteraceaeIds = new Set(["sunflower", "chrysanthemum", "chrysanthemum-indicum", "crown-daisy", "shasta-daisy", "feverfew", "calendula", "strawflower", "oxeye-daisy", "marigold", "gerbera", "zinnia", "cosmos", "aster", "echinacea", "cornflower"]);
    const woodyIds = new Set(["rose", "magnolia", "camellia", "hydrangea", "cherry", "jasmine", "gardenia", "lilac", "hibiscus", "azalea", "daphne", "osmanthus", "bougainvillea", "frangipani", "ylang-ylang", "protea", "lantana", "heather", "wisteria", "poinsettia", "sage", "damask-rose", "dog-rose", "rugosa-rose", "china-rose", "banksia-rose", "tea-rose", "magnolia", "plum-blossom", "wintersweet", "peach-blossom", "chinese-crabapple", "yulan-magnolia", "tree-peony", "crape-myrtle", "yunnan-camellia", "chinese-scholar-tree", "saucer-magnolia", "kobus-magnolia", "jacaranda", "flamboyant", "golden-shower-tree", "pink-trumpet-tree", "african-tulip-tree", "silk-floss-tree"]);
    const chinaCultureIds = new Set(["plum-blossom", "wintersweet", "peach-blossom", "chinese-crabapple", "yulan-magnolia", "tree-peony", "crape-myrtle", "yunnan-camellia", "japanese-honeysuckle", "chinese-scholar-tree"]);

    function botanicalFamily(flower) {
      if (orchidIds.has(flower.id)) return "Orchidaceae";
      if (roseIds.has(flower.id)) return "Rosaceae";
      if (asteraceaeIds.has(flower.id)) return "Asteraceae";
      return flower.family || "";
    }

    function botanicalGenus(flower) {
      if (orchidIds.has(flower.id)) return flower.genus || flower.latin.split(" ")[0];
      if (roseIds.has(flower.id)) return "Rosa";
      return flower.genus || (asteraceaeIds.has(flower.id) ? flower.latin.split(" ")[0] : "");
    }

    function botanicalGrowthForm(flower) {
      if (flower.growthForm) return flower.growthForm;
      if (orchidIds.has(flower.id)) return "Biểu sinh hoặc mọc đất";
      if (woodyIds.has(flower.id)) return "Thân gỗ / cây bụi";
      return "";
    }

    function botanicalTag(flower) {
      if (orchidIds.has(flower.id) || flower.family === "Orchidaceae") return "Họ Lan · Orchidaceae";
      if (roseIds.has(flower.id) || flower.genus === "Rosa") return "Chi Hoa hồng · Rosa";
      if (botanicalFamily(flower) === "Asteraceae") return "Họ Cúc · Asteraceae";
      if (woodyIds.has(flower.id) || flower.growthForm?.includes("gỗ")) return "Cây thân gỗ";
      return flower.label;
    }

    function matchesBotanicalCategory(flower, category) {
      if (category === "orchid") return botanicalFamily(flower) === "Orchidaceae";
      if (category === "rose") return botanicalGenus(flower) === "Rosa";
      if (category === "asteraceae") return botanicalFamily(flower) === "Asteraceae";
      if (category === "china-culture") return chinaCultureIds.has(flower.id);
      if (category === "woody") return woodyIds.has(flower.id) || flower.growthForm?.includes("gỗ") || flower.growthForm === "Cây bụi";
      return flower.group === category;
    }

    const grid = document.querySelector("#flower-grid");
    const searchInput = document.querySelector("#flower-search");
    const categoryButtons = [...document.querySelectorAll(".filter-button")];
    const favoritesToggle = document.querySelector("#favorites-toggle");
    const savedCount = document.querySelector("#saved-count");
    const dialogBackdrop = document.querySelector("#dialog-backdrop");
    const wikiLanguage = document.querySelector("#wiki-language");
    const wikiStatus = document.querySelector("#wiki-status");
    const loadMoreWrap = document.querySelector("#load-more-wrap");
    const loadMoreButton = document.querySelector("#load-more");
    const publicView = document.querySelector("#public-view");
    const expertView = document.querySelector("#expert-view");
    const expertForm = document.querySelector("#expert-form");
    const expertImages = document.querySelector("#expert-images");
    const expertModeButtons = [...document.querySelectorAll("[data-entry-mode]")];
    const expertFlowerSelect = document.querySelector("#update-flower");
    const contributionKey = "hoa-dia-cau-expert-records-v1";
    let expertMode = "new";
    let contributions = [];
    let previewUrls = [];
    document.querySelector("#flower-total").textContent = `${flowers.length} loài`;
    let activeCategory = "all";
    let favoritesOnly = false;
    let searchTimer;
    const wikiState = { query: "", items: [], continuation: null, loading: false, error: "", requestId: 0 };
    const favorites = new Set();
    const bibleReflections = {
      rose: ["Giữa khu vườn rộng, vẻ đẹp dịu dàng vẫn tìm được chỗ để nở; tình yêu chân thành cũng vậy, càng được gìn giữ càng thêm hương sắc.", "Diễm ca 2:1-2", "Điều được chăm bằng lòng kiên nhẫn sẽ nở bền lâu."],
      tulip: ["Bông hoa không tự dệt sắc áo, vậy mà vẫn rạng ngời trong mùa của mình; hãy sống trọn phần mùa được trao.", "Ma-thi-ơ 6:28-30", "Nở đúng mùa quý hơn nở vội."],
      sunflower: ["Mặt trời đi qua, đóa hoa vẫn ngước lên; lòng biết ơn cũng có thể tìm thấy ánh sáng sau một ngày dài.", "Thi Thiên 104:24", "Hướng về điều lành, lòng sẽ tìm được ngày mai."],
      orchid: ["Vẻ đẹp kín đáo không cần tiếng gọi; như cánh hoa trong rừng, điều quý giá vẫn được nhìn thấy.", "Lu-ca 12:27-28", "Sự thanh nhã bắt đầu từ bình an bên trong."],
      cherry: ["Có mùa cành đầy hoa, có mùa chỉ còn gió; cả hai đều thuộc về vòng quay dịu dàng của đời sống.", "Truyền Đạo 3:1-2", "Biết quý mùa hoa cũng là biết quý mùa chờ."],
      lotus: ["Từ mặt nước lặng, đóa sen vươn lên đón trời; nơi khởi đầu không quyết định nơi ta có thể nở.", "Thi Thiên 92:12-14", "Rễ vững trong điều lành, hoa sẽ tìm thấy ánh sáng."],
      poppy: ["Cánh hoa mỏng trước gió nhắc ta về ngày tháng ngắn; điều được gieo bằng yêu thương còn lưu lại lâu hơn.", "Ê-sai 40:6-8", "Vẻ đẹp qua đi; lòng nhân hậu còn ở lại."],
      daffodil: ["Mùa lạnh rời cánh đồng, tiếng chim và sắc hoa trở về; sau quãng lặng, niềm vui lại tìm được lối vào.", "Diễm ca 2:11-12", "Đừng khép lòng trước mùa mới."],
      jasmine: ["Hương hoa lan xa dù cánh hoa nhỏ; một lời dịu dàng cũng có thể làm căn phòng rộng thêm.", "II Cô-rinh-tô 2:14-15", "Lời tử tế để lại hương lâu hơn lời khen."],
      magnolia: ["Ngay vùng đất tưởng khô cằn, hoa vẫn có thể thức dậy; hy vọng đôi khi bắt đầu bằng một nụ nhỏ.", "Ê-sai 35:1-2", "Hãy để hy vọng bén rễ trước khi mùa đến."],
      marigold: ["Ngày dài vun trồng chưa thấy sắc vàng, nhưng hạt giống âm thầm làm phần việc của mình.", "Ga-la-ti 6:9", "Kiên trì chăm điều tốt; mùa gặt cần thời gian."],
      dahlia: ["Mỗi cánh mang một dáng riêng, cùng nâng một bông hoa; khác biệt không ngăn ta thuộc về nhau.", "I Cô-rinh-tô 12:14-20", "Khu vườn đẹp nhờ nhiều sắc hoa."],
      "morning-glory": ["Bình minh mở cánh hoa, ánh sáng trải dài trên lối nhỏ; mỗi ngày đều có thể bắt đầu lại.", "Châm Ngôn 4:18", "Đi từng bước trong sáng, đường sẽ dần rõ."],
      "forget-me-not": ["Bông xanh nhỏ không đòi được nhớ bằng tiếng lớn; tình nghĩa bền lâu thường trú trong những điều giản dị.", "Thi Thiên 103:15-17", "Nhớ đến nhau là một cách giữ lòng thủy chung."],
      "bird-of-paradise": ["Muôn hình muôn vẻ cùng làm nên một thế giới phong phú; chẳng tạo vật nào phải nở giống tạo vật nào.", "Thi Thiên 104:24", "Hãy nở theo hình hài riêng của mình."],
      poinsettia: ["Một đốm sáng nhỏ đủ đổi sắc căn phòng; một việc lành âm thầm cũng có thể soi đường cho người khác.", "Ma-thi-ơ 5:16", "Tỏa sáng bằng việc làm, không bằng lời phô trương."],
      snowdrop: ["Bông trắng đầu mùa không xua hết giá lạnh, nhưng báo rằng mùa lạnh không kéo dài mãi.", "Ê-sai 35:1-2", "Một dấu hiệu hy vọng cũng đủ để bước tiếp."],
      protea: ["Dáng hoa lạ vẫn mang vẻ đẹp trọn vẹn; điều khác thường không phải là điều kém quý.", "Thi Thiên 139:14", "Trân trọng nét riêng, đừng ép hoa nở cùng khuôn."],
      tuberose: ["Hương thơm có thể ở lại sau khi cánh hoa khép; lòng tốt cũng lưu dấu trong người từng gặp.", "II Cô-rinh-tô 2:15", "Hãy để sự hiện diện của mình đem bình an."],
      bluebell: ["Dưới tán rừng yên, những đóa chuông cùng nở; bình an đôi khi là biết mình đang được chở che.", "Thi Thiên 23:2", "Nghỉ yên cũng là một cách lớn lên."],
      echinacea: ["Cây bén rễ bên dòng nước vẫn giữ màu xanh khi nắng kéo dài; lòng đặt nơi vững chãi sẽ bền qua mùa hạn.", "Giê-rê-mi 17:7-8", "Chăm rễ trước khi lo cành lá."],
      "bleeding-heart": ["Có giọt buồn hình trái tim, có bàn tay lặng lẽ ở bên; cùng khóc với nhau cũng là một cách yêu thương.", "Rô-ma 12:15", "Lắng nghe nỗi buồn là gieo một hạt an ủi."],
      osmanthus: ["Chùm hoa bé mang hương đi xa; lời hòa nhã làm dịu lòng người như mật ngọt.", "Châm Ngôn 16:24", "Lời mềm là món quà không cần gói."],
      camellia: ["Cành xanh qua mùa lạnh vẫn giữ nụ; phẩm giá không lệ thuộc vào ngày trời thuận.", "Châm Ngôn 31:25", "Vững lòng hôm nay, đón ngày mai bằng hy vọng."],
      cornflower: ["Sắc xanh nhỏ nổi lên giữa cánh đồng rộng; vẻ đẹp bình dị cũng xứng đáng được nhìn thấy.", "Ma-thi-ơ 6:28-30", "Đừng xem nhẹ điều giản đơn đang nở cạnh mình."]
    };
    const defaultReflections = {
      garden: ["Người vun đất kiên nhẫn rồi cũng thấy mầm xanh đáp lời; chăm sóc điều nhỏ là một cách gìn giữ hy vọng.", "Truyền Đạo 3:1-2", "Điều được nuôi dưỡng mỗi ngày sẽ tìm được mùa nở."],
      tropical: ["Dưới tán lá rộng, sắc hoa vẫn tìm đường đến với nắng; sự sống luôn tìm cách cất lời.", "Thi Thiên 104:24", "Hãy để lòng biết ơn mở rộng như khu vườn."],
      wild: ["Không hàng rào nào định trước nơi hoa dại nở; vẻ đẹp tự do thường đến cùng lòng can đảm.", "Ma-thi-ơ 6:28-30", "Đôi khi cứ để mình nở tự nhiên."],
      seasonal: ["Mùa đến rồi đi, cánh hoa khép rồi mở; mỗi chặng đường đều có vẻ đẹp riêng.", "Truyền Đạo 3:1-2", "Đón mùa đang có, đừng vội sống trong mùa chưa tới."]
    };
    const bloomPlaces = {
      tulip: "Keukenhof, Lisse, Hà Lan · mùa xuân",
      sunflower: "Tuscany, Ý · giữa hè đến đầu thu",
      lavender: "Plateau de Valensole, Provence, Pháp · cuối tháng 6 đến tháng 7",
      cherry: "Công viên Ueno, Tokyo, Nhật Bản · cuối tháng 3 đến đầu tháng 4",
      lotus: "Đầm sen Đồng Tháp Mười, Việt Nam · mùa hè",
      hydrangea: "Kamakura, Kanagawa, Nhật Bản · mùa mưa đầu hè",
      dahlia: "Vườn bách thảo San Francisco, Hoa Kỳ · cuối hè",
      daffodil: "Công viên quốc gia Lake District, Anh · đầu xuân",
      bluebell: "Rừng Hallerbos, Bỉ · giữa đến cuối tháng 4",
      wisteria: "Công viên hoa Ashikaga, Tochigi, Nhật Bản · cuối tháng 4 đến đầu tháng 5",
      edelweiss: "Vùng núi Alps · mùa hè, quan sát tại lối mòn được phép",
      protea: "Vườn bách thảo quốc gia Kirstenbosch, Cape Town, Nam Phi · mùa đông đến xuân",
      poinsettia: "Taxco, Guerrero, Mexico · mùa đông",
      magnolia: "Vườn bách thảo quốc gia Hoa Kỳ, Washington D.C. · đầu xuân",
      poppy: "Thung lũng Antelope, California, Hoa Kỳ · mùa xuân, tùy lượng mưa",
      lupine: "Công viên quốc gia Mount Rainier, Washington, Hoa Kỳ · giữa hè",
      frangipani: "Các khu vườn nhiệt đới Đông Nam Á · mùa hè",
      jasmine: "Các vườn nhài Nam Á · chiều tối trong mùa hè"
    };

    function imageUrl(flower) {
      return flower.thumbnail || "";
    }

    function renderSeasonalStory() {
      const availableStories = seasonalStories.filter(story => flowers.some(flower => flower.id === story.id && flower.thumbnail));
      if (!availableStories.length) return;
      let previousId = "";
      try { previousId = localStorage.getItem(seasonalStoryKey) || ""; } catch (error) { previousId = ""; }
      const choices = availableStories.filter(story => story.id !== previousId);
      const selection = choices[Math.floor(Math.random() * choices.length)] || availableStories[0];
      const flower = flowers.find(item => item.id === selection.id);
      document.querySelector("#feature-flower-name").textContent = `Chuyện mùa hoa · ${flower.name}`;
      document.querySelector("#feature-title").textContent = selection.title;
      document.querySelector("#feature-poem").textContent = selection.poem;
      const image = document.querySelector("#feature-image");
      image.src = imageUrl(flower);
      image.alt = flower.name;
      try { localStorage.setItem(seasonalStoryKey, selection.id); } catch (error) { return; }
    }

    function showReflection(flowerId, group = "wild") {
      const [text, reference, proverb] = bibleReflections[flowerId] || defaultReflections[group] || defaultReflections.wild;
      document.querySelector("#detail-reflection").textContent = text;
      document.querySelector("#detail-reference").textContent = `Gợi từ ${reference}`;
      document.querySelector("#detail-proverb").textContent = proverb;
    }

    async function loadFeaturedImages() {
      try {
        const titleMap = new Map();
        const pages = new Map();
        const sourcedFlowers = flowers.filter(flower => flower.latin && !(flower.expertContribution && (!flower.wikiTitle || flower.images?.length)));
        const batches = Array.from({ length: Math.ceil(sourcedFlowers.length / 45) }, (_, index) => sourcedFlowers.slice(index * 45, (index + 1) * 45));
        for (const batch of batches) {
          const params = new URLSearchParams({ action: "query", titles: batch.map(flower => flower.latin).join("|"), prop: "pageimages|info", piprop: "thumbnail", pithumbsize: "900", inprop: "url", redirects: "1", format: "json", formatversion: "2", origin: "*" });
          const response = await fetch(`https://en.wikipedia.org/w/api.php?${params}`);
          if (!response.ok) continue;
          const data = await response.json();
          for (const item of [...(data.query?.normalized || []), ...(data.query?.redirects || [])]) {
            titleMap.set(item.from.toLocaleLowerCase(), item.to);
          }
          for (const page of data.query?.pages || []) pages.set(page.title.toLocaleLowerCase(), page);
        }
        for (const flower of flowers) {
          if (!flower.latin || (flower.expertContribution && (!flower.wikiTitle || flower.images?.length))) continue;
          const normalizedTitle = titleMap.get(flower.latin.toLocaleLowerCase()) || flower.latin;
          const page = pages.get(normalizedTitle.toLocaleLowerCase());
          const verifiedFallback = verifiedImageFallbacks[flower.id];
          flower.thumbnail = page?.thumbnail?.source || verifiedFallback?.thumbnail || "";
          flower.sourceTitle = page?.thumbnail?.source ? page.title : verifiedFallback?.sourceTitle || page?.title || flower.latin;
          flower.sourceUrl = page?.thumbnail?.source ? page.fullurl : verifiedFallback?.sourceUrl || page?.fullurl || `https://en.wikipedia.org/wiki/${encodeURIComponent(flower.latin.replaceAll(" ", "_"))}`;
          flower.imageCredit = verifiedFallback?.imageCredit || flower.imageCredit || "";
        }
        for (const item of wikiState.items) {
          const flower = flowers.find(candidate => candidate.id === item.featuredId);
          if (flower) {
            item.thumbnail = flower.thumbnail;
            item.url = flower.sourceUrl;
          }
        }
        renderSeasonalStory();
        if (!wikiState.query) renderFlowers();
      } catch (error) {
        return;
      }
    }

    function visibleFlowers() {
      const query = searchInput.value.trim().toLocaleLowerCase("vi");
      const sort = document.querySelector("#sort-select").value;
      let results = flowers.filter(flower => {
        const searchable = `${flower.name} ${flower.latin} ${flower.color} ${flower.origin} ${flower.label} ${flower.meaning} ${flower.culturalNote || ""} ${botanicalFamily(flower)} ${botanicalGenus(flower)} ${botanicalGrowthForm(flower)}`.toLocaleLowerCase("vi");
        return (!query || searchable.includes(query)) &&
          (activeCategory === "all" || matchesBotanicalCategory(flower, activeCategory)) &&
          (!favoritesOnly || favorites.has(flower.id));
      });
      if (sort === "name") results = [...results].sort((a, b) => a.name.localeCompare(b.name, "vi"));
      return results;
    }

    function renderFlowers() {
      if (wikiState.query) {
        renderWikipediaResults();
        return;
      }
      const results = visibleFlowers();
      loadMoreWrap.hidden = true;
      wikiStatus.textContent = `${flowers.length} loài gợi ý. Nhập từ khóa để tra cứu Wikipedia.`;
      document.querySelector("#result-count").textContent = `${results.length} loài hoa`;
      if (!results.length) {
        grid.innerHTML = `<div class="empty-state"><h3>Chưa tìm thấy loài hoa phù hợp</h3><p>Thử một tên gọi, màu sắc hoặc nhóm hoa khác nhé.</p><button class="reset-button" type="button">Xem tất cả hoa</button></div>`;
        grid.querySelector(".reset-button").addEventListener("click", () => {
          searchInput.value = "";
          activeCategory = "all";
          favoritesOnly = false;
          favoritesToggle.classList.remove("is-active");
          favoritesToggle.setAttribute("aria-pressed", "false");
          categoryButtons.forEach(button => button.classList.toggle("active", button.dataset.category === "all" && !button.classList.contains("taxonomy-filter")));
          renderFlowers();
        });
        return;
      }
      grid.innerHTML = results.map((flower, index) => `
        <article class="flower-card" style="animation-delay:${Math.min(index * 35, 245)}ms">
          <div class="card-image" data-open="${flower.id}" tabindex="0" role="button" aria-label="Xem thông tin ${flower.name}">
            ${flower.thumbnail ? `<img src="${imageUrl(flower)}" alt="${escapeHtml(flower.name)}" loading="lazy">` : `<span class="image-unavailable">Chưa có ảnh đúng loài đã xác minh</span>`}
            <span class="flower-tag${botanicalTag(flower) !== flower.label ? " taxonomy-highlight" : ""}">${escapeHtml(botanicalTag(flower))}</span>
            <button class="save-button${favorites.has(flower.id) ? " saved" : ""}" type="button" data-save="${flower.id}" aria-label="${favorites.has(flower.id) ? "Bỏ yêu thích" : "Lưu yêu thích"} ${flower.name}" aria-pressed="${favorites.has(flower.id)}">
              <svg viewBox="0 0 24 24" fill="${favorites.has(flower.id) ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 8.8c0 5.3-8.8 10.2-8.8 10.2S3.2 14.1 3.2 8.8A4.6 4.6 0 0 1 12 6.5a4.6 4.6 0 0 1 8.8 2.3Z"/></svg>
            </button>
          </div>
          <div class="card-copy" data-open="${flower.id}" tabindex="0" role="button" aria-label="Xem thông tin ${flower.name}">
            <div class="card-title-row"><h3>${flower.name}</h3></div>
            <p class="latin">${flower.latin}</p>
            ${botanicalFamily(flower) ? `<p class="taxon-line">${escapeHtml(botanicalFamily(flower))} · ${escapeHtml(botanicalGenus(flower))}${botanicalGrowthForm(flower) ? ` · ${escapeHtml(botanicalGrowthForm(flower))}` : ""}</p>` : ""}
            ${flower.culturalNote ? `<p class="cultural-note">Văn hóa Trung Hoa · ${escapeHtml(flower.culturalNote)}</p>` : ""}
            <div class="card-meta"><span class="color"><i class="swatch" style="--swatch:${flower.swatch}"></i>${flower.color}</span><span>${flower.season}</span></div>
            <p class="card-region" title="${escapeHtml(flower.locality || flower.origin || "Vùng phân bố chưa ghi nhận")}">Phân bố: ${escapeHtml(flower.locality || flower.origin || "Chưa ghi nhận")}</p>
            <p class="card-region" title="${escapeHtml(viewingRecommendation(flower).text)}">Ngắm hoa: ${escapeHtml(viewingRecommendation(flower).text)}</p>
          </div>
        </article>`).join("");
      grid.querySelectorAll("[data-open]").forEach(element => {
        element.addEventListener("click", () => openDetails(element.dataset.open));
        element.addEventListener("keydown", event => {
          if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openDetails(element.dataset.open); }
        });
      });
      grid.querySelectorAll("[data-save]").forEach(button => button.addEventListener("click", event => {
        event.stopPropagation();
        const id = button.dataset.save;
        favorites.has(id) ? favorites.delete(id) : favorites.add(id);
        updateFavoritesControl();
        renderFlowers();
      }));
    }

    function escapeHtml(value) {
      return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[character]);
    }

    function renderWikipediaResults() {
      const language = wikiLanguage.value;
      const languageName = language === "vi" ? "Wikipedia tiếng Việt" : "English Wikipedia";
      const wikiCount = wikiState.items.filter(page => !page.featuredId).length;
      const featuredCount = wikiState.items.length - wikiCount;
      if (wikiState.loading) {
        wikiStatus.textContent = `${featuredCount ? `${featuredCount} loài trong vườn gợi ý · ` : ""}Đang tìm trên ${languageName}…`;
      } else if (wikiState.error) {
        wikiStatus.textContent = "Không thể tải dữ liệu từ Wikipedia. Kiểm tra kết nối rồi thử lại. ";
        const retry = document.createElement("button");
        retry.className = "wiki-link";
        retry.type = "button";
        retry.textContent = "Thử lại";
        retry.addEventListener("click", () => searchWikipedia());
        wikiStatus.append(retry);
      } else {
        wikiStatus.textContent = `${featuredCount} loài gợi ý · ${wikiCount} bài từ ${languageName}. Từ khóa giúp mở rộng tra cứu.`;
      }
      document.querySelector("#result-count").textContent = `${wikiState.items.length}${wikiState.continuation ? "+" : ""} kết quả`;
      loadMoreWrap.hidden = !wikiState.continuation && !wikiState.loading;
      loadMoreButton.disabled = wikiState.loading;
      loadMoreButton.textContent = wikiState.loading ? "Đang tải…" : `Tải thêm kết quả (${wikiState.items.length} đã tải)`;
      if (!wikiState.items.length && !wikiState.loading) {
        const heading = wikiState.error ? "Không thể kết nối Wikipedia" : "Chưa tìm thấy kết quả";
        const message = wikiState.error ? "Kiểm tra kết nối Internet hoặc thử lại sau." : "Thử từ khóa khác hoặc đổi ngôn ngữ Wikipedia.";
        grid.innerHTML = `<div class="empty-state"><h3>${heading}</h3><p>${message}</p></div>`;
        return;
      }
      if (!wikiState.items.length) {
        grid.innerHTML = `<div class="empty-state"><h3>Đang tìm trong bách khoa toàn thư</h3><p>Kết quả sẽ xuất hiện ngay sau khi Wikipedia phản hồi.</p></div>`;
        return;
      }
      grid.innerHTML = wikiState.items.map((page, index) => `
        <article class="flower-card" style="animation-delay:${Math.min(index % 8 * 35, 245)}ms">
          <div class="card-image" data-wiki-open="${page.pageid}" tabindex="0" role="button" aria-label="Xem thông tin ${escapeHtml(page.title)}">
            ${page.thumbnail ? `<img src="${escapeHtml(page.thumbnail)}" alt="${escapeHtml(page.title)}" loading="lazy">` : `<span class="image-unavailable">Wikipedia chưa cung cấp ảnh cho bài này</span>`}
            <span class="flower-tag">${page.featuredId ? "Gợi ý" : "Wikipedia"}</span>
          </div>
          <div class="card-copy" data-wiki-open="${page.pageid}" tabindex="0" role="button" aria-label="Xem thông tin ${escapeHtml(page.title)}">
            <h3>${escapeHtml(page.title)}</h3>
            <p class="latin">${escapeHtml(page.extract || "Mở bài viết để xem thông tin chi tiết.")}</p>
            <div class="card-meta"><span>${page.featuredId ? "Bách khoa hoa" : escapeHtml(languageName)}</span><a class="wiki-link" href="${escapeHtml(page.url)}" target="_blank" rel="noopener noreferrer">Bài viết ↗</a></div>
          </div>
        </article>`).join("");
      grid.querySelectorAll("[data-wiki-open]").forEach(element => {
        element.addEventListener("click", () => openWikipediaDetails(Number(element.dataset.wikiOpen)));
        element.addEventListener("keydown", event => {
          if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openWikipediaDetails(Number(element.dataset.wikiOpen)); }
        });
      });
      grid.querySelectorAll(".wiki-link").forEach(link => link.addEventListener("click", event => event.stopPropagation()));
    }

    async function searchWikipedia(append = false) {
      const requestId = ++wikiState.requestId;
      const language = wikiLanguage.value;
      const api = `https://${language}.wikipedia.org/w/api.php`;
      const params = new URLSearchParams({ action: "query", list: "search", srsearch: wikiState.query, srlimit: "50", srnamespace: "0", srwhat: "text", format: "json", origin: "*" });
      if (append && wikiState.continuation) Object.entries(wikiState.continuation).forEach(([key, value]) => params.set(key, value));
      wikiState.loading = true;
      wikiState.error = "";
      if (!append) {
        const query = wikiState.query.toLocaleLowerCase("vi");
        wikiState.items = flowers.filter(flower => `${flower.name} ${flower.latin}`.toLocaleLowerCase("vi").includes(query)).map((flower, index) => ({
          pageid: -(index + 1), featuredId: flower.id, title: flower.name, extract: flower.description, thumbnail: flower.thumbnail || "", url: flower.sourceUrl || `https://en.wikipedia.org/wiki/${encodeURIComponent(flower.latin.replaceAll(" ", "_"))}`
        }));
      }
      renderWikipediaResults();
      try {
        const searchResponse = await fetch(`${api}?${params}`);
        if (!searchResponse.ok) throw new Error("Wikipedia search failed");
        const searchData = await searchResponse.json();
        if (requestId !== wikiState.requestId) return;
        const matches = searchData.query?.search || [];
        wikiState.continuation = searchData.continue || null;
        if (matches.length) {
          const detailParams = new URLSearchParams({ action: "query", prop: "extracts|pageimages|info", exintro: "1", explaintext: "1", exchars: "520", piprop: "thumbnail", pithumbsize: "700", inprop: "url", titles: matches.map(page => page.title).join("|"), format: "json", formatversion: "2", origin: "*" });
          const detailResponse = await fetch(`${api}?${detailParams}`);
          if (!detailResponse.ok) throw new Error("Wikipedia article lookup failed");
          const detailData = await detailResponse.json();
          if (requestId !== wikiState.requestId) return;
          const pages = (detailData.query?.pages || []).map(page => ({ pageid: page.pageid, title: page.title, extract: page.extract || "", thumbnail: page.thumbnail?.source || "", url: page.fullurl || `https://${language}.wikipedia.org/?curid=${page.pageid}` }));
          const existingIds = new Set(wikiState.items.filter(page => !page.featuredId).map(page => page.pageid));
          const uniquePages = pages.filter(page => !existingIds.has(page.pageid));
          wikiState.items.push(...uniquePages);
        }
      } catch (error) {
        if (requestId === wikiState.requestId) wikiState.error = error.message;
      } finally {
        if (requestId === wikiState.requestId) {
          wikiState.loading = false;
          renderWikipediaResults();
        }
      }
    }

    function openWikipediaDetails(pageid) {
      const page = wikiState.items.find(item => item.pageid === pageid);
      if (!page) return;
      if (page.featuredId) {
        openDetails(page.featuredId);
        return;
      }
      const image = document.querySelector("#detail-image");
      image.hidden = !page.thumbnail;
      image.src = page.thumbnail || "";
      image.alt = page.title;
      document.querySelector("#detail-image-empty").hidden = Boolean(page.thumbnail);
      document.querySelector("#detail-category").textContent = wikiLanguage.value === "vi" ? "Nguồn: Wikipedia tiếng Việt" : "Nguồn: English Wikipedia";
      document.querySelector("#detail-name").textContent = page.title;
      document.querySelector("#detail-latin").textContent = "";
      document.querySelector("#detail-description").textContent = page.extract || "Mở bài viết Wikipedia để xem thông tin chi tiết.";
      showReflection(null);
      document.querySelector("#detail-facts").innerHTML = `<div><dt>Nguồn</dt><dd><a class="wiki-link" href="${escapeHtml(page.url)}" target="_blank" rel="noopener noreferrer">Đọc bài viết Wikipedia ↗</a></dd></div>`;
      dialogBackdrop.classList.add("open");
      document.querySelector("#dialog-close").focus();
      document.body.style.overflow = "hidden";
    }

    function updateFavoritesControl() {
      savedCount.textContent = favorites.size;
      savedCount.hidden = favorites.size === 0;
    }

    function renderDetailGallery(images = []) {
      const gallery = document.querySelector("#detail-gallery");
      gallery.replaceChildren();
      for (const source of images.filter(Boolean).slice(0, 4)) {
        const thumbnail = document.createElement("img");
        thumbnail.src = source;
        thumbnail.alt = "Ảnh bổ sung của loài hoa";
        gallery.append(thumbnail);
      }
    }

    function openDetails(id) {
      const flower = flowers.find(item => item.id === id);
      if (!flower) return;
      const image = document.querySelector("#detail-image");
      image.hidden = false;
      image.hidden = !flower.thumbnail;
      image.src = imageUrl(flower);
      image.alt = flower.name;
      document.querySelector("#detail-image-empty").hidden = Boolean(flower.thumbnail);
      renderDetailGallery(flower.images || (flower.thumbnail?.startsWith("data:") ? [flower.thumbnail] : []));
      document.querySelector("#detail-category").textContent = flower.label;
      document.querySelector("#detail-name").textContent = flower.name;
      document.querySelector("#detail-latin").textContent = flower.latin;
      document.querySelector("#detail-description").textContent = flower.description;
      showReflection(flower.id, flower.group);
      const viewing = viewingRecommendation(flower);
      const observationPlace = flower.locality || flower.origin;
      const observationMap = mapLink(observationPlace, flower.latitude, flower.longitude, "Mở bản đồ ↗");
      const viewingPlace = viewing.text.split(" · ")[0];
      const viewingMap = viewing.verified ? mapLink(viewingPlace, null, null, "Bản đồ ↗") : mapLink(observationPlace, flower.latitude, flower.longitude, "Bản đồ vùng ↗");
      const facts = [
        ["Họ thực vật", botanicalFamily(flower)], ["Chi", botanicalGenus(flower)], ["Dạng sinh trưởng", botanicalGrowthForm(flower)],
        ["Vùng phân bố", flower.origin],
        ["Địa điểm ghi nhận", `${escapeHtml(flower.locality || "Chưa có địa điểm ghi nhận cụ thể")}${observationMap ? ` · ${observationMap}` : ""}`, true],
        ["Nơi ngắm hoa", `${escapeHtml(viewing.text)}${viewingMap ? ` · ${viewingMap}` : ""}`, true],
        ["Sinh cảnh", flower.habitat], ["Mùa nở", flower.season], ["Chiều cao", flower.height],
        ["Văn hóa Trung Hoa", flower.culturalNote],
        ["Độ cao ghi nhận", flower.altitude], ["Nhiệt độ", flower.temperature], ["Đất", flower.soil],
        ["Ánh sáng", flower.light], ["Nước / độ ẩm", flower.moisture], ["Ý nghĩa", flower.meaning]
      ].filter(([, value]) => value);
      const sourceUrl = flower.sourceUrl || (flower.latin ? `https://en.wikipedia.org/wiki/${encodeURIComponent(flower.latin.replaceAll(" ", "_"))}` : "");
      if (sourceUrl) facts.push(["Nguồn ảnh / bài viết", `<a class="wiki-link" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(flower.sourceTitle || flower.latin || "Mở nguồn tham khảo")} ↗</a>`, true]);
      else facts.push(["Nguồn dữ liệu", "Đóng góp chuyên gia trên thiết bị này"]);
      if (flower.imageCredit) facts.push(["Tác giả ảnh", flower.imageCredit]);
      document.querySelector("#detail-facts").innerHTML = facts.map(([label, value, isMarkup]) => `<div><dt>${escapeHtml(label)}</dt><dd>${isMarkup ? value : escapeHtml(value)}</dd></div>`).join("");
      dialogBackdrop.classList.add("open");
      document.querySelector("#dialog-close").focus();
      document.body.style.overflow = "hidden";
    }

    function closeDetails() {
      dialogBackdrop.classList.remove("open");
      document.body.style.overflow = "";
    }

    function upsertFlower(record) {
      const existingIndex = flowers.findIndex(flower => flower.id === record.id);
      if (existingIndex >= 0) Object.assign(flowers[existingIndex], record);
      else flowers.push(record);
      document.querySelector("#flower-total").textContent = `${flowers.length} loài`;
    }

    function persistContributions() {
      try {
        const compactRecords = contributions.map(record => {
          const copy = { ...record };
          if (copy.images?.[0] && copy.thumbnail === copy.images[0]) delete copy.thumbnail;
          return copy;
        });
        localStorage.setItem(contributionKey, JSON.stringify(compactRecords));
        return true;
      } catch (error) {
        return false;
      }
    }

    function restoreContributions() {
      try {
        contributions = JSON.parse(localStorage.getItem(contributionKey) || "[]").filter(record => record.id && record.name && record.latin);
        for (const record of contributions) {
          record.thumbnail ||= record.images?.[0] || "";
          upsertFlower(record);
        }
      } catch (error) {
        contributions = [];
      }
      updateFlowerOptions();
      renderContributionList();
    }

    function updateFlowerOptions() {
      const selectedId = expertFlowerSelect.value;
      expertFlowerSelect.replaceChildren();
      for (const flower of flowers) {
        const option = document.createElement("option");
        option.value = flower.id;
        option.textContent = `${flower.name} · ${flower.latin}`;
        expertFlowerSelect.append(option);
      }
      if (flowers.some(flower => flower.id === selectedId)) expertFlowerSelect.value = selectedId;
    }

    function fillExpertForm(flower) {
      if (!flower) return;
      expertForm.elements.name.value = flower.name || "";
      expertForm.elements.latin.value = flower.latin || "";
      expertForm.elements.group.value = flower.group || "garden";
      expertForm.elements.color.value = flower.color || "";
      expertForm.elements.family.value = botanicalFamily(flower);
      expertForm.elements.genus.value = botanicalGenus(flower);
      expertForm.elements.growthForm.value = botanicalGrowthForm(flower);
      expertForm.elements.description.value = flower.description || "";
      expertForm.elements.origin.value = flower.origin || "";
      expertForm.elements.locality.value = flower.locality || "";
      expertForm.elements.bloomPlace.value = flower.bloomPlace || "";
      expertForm.elements.habitat.value = flower.habitat || "";
      expertForm.elements.latitude.value = flower.latitude ?? "";
      expertForm.elements.longitude.value = flower.longitude ?? "";
      expertForm.elements.season.value = flower.season || "";
      expertForm.elements.height.value = flower.height || "";
      expertForm.elements.altitude.value = flower.altitude || "";
      expertForm.elements.temperature.value = flower.temperature || "";
      expertForm.elements.soil.value = flower.soil || "";
      expertForm.elements.light.value = flower.light || "";
      expertForm.elements.moisture.value = flower.moisture || "";
      expertForm.elements.meaning.value = flower.meaning || "";
      expertForm.elements.imageCredit.value = flower.imageCredit || "";
      expertForm.elements.sourceUrl.value = flower.sourceUrl || "";
      expertImages.value = "";
      renderImagePreview(flower.images || (flower.thumbnail?.startsWith("data:") ? [flower.thumbnail] : []));
    }

    function setExpertMode(mode) {
      expertMode = mode;
      expertModeButtons.forEach(button => {
        const isActive = button.dataset.entryMode === mode;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
      document.querySelector("#update-flower-wrap").hidden = mode !== "update";
      if (mode === "update") fillExpertForm(flowers.find(flower => flower.id === expertFlowerSelect.value));
      else {
        expertForm.reset();
        renderImagePreview([]);
      }
      document.querySelector("#form-message").textContent = "";
    }

    function renderContributionList() {
      const list = document.querySelector("#contribution-list");
      document.querySelector("#contribution-count").textContent = `${contributions.length} bản ghi`;
      if (!contributions.length) {
        list.innerHTML = `<p class="expert-empty">Chưa có đóng góp. Bản ghi mới hoặc cập nhật sẽ xuất hiện ở đây và trong chế độ tra cứu.</p>`;
        return;
      }
      list.innerHTML = [...contributions].reverse().map(record => `
        <article class="contribution-item">
          ${record.thumbnail ? `<img src="${escapeHtml(record.thumbnail)}" alt="Ảnh ${escapeHtml(record.name)}">` : `<span class="contribution-placeholder" aria-hidden="true"></span>`}
          <div><h3>${escapeHtml(record.name)}</h3><p><i>${escapeHtml(record.latin)}</i></p><p>${escapeHtml(record.locality || record.origin || "Chưa ghi vùng phân bố")}</p></div>
        </article>`).join("");
    }

    function renderImagePreview(images) {
      const preview = document.querySelector("#image-preview");
      previewUrls.forEach(url => URL.revokeObjectURL(url));
      previewUrls = [];
      preview.replaceChildren();
      for (const image of images) {
        const source = typeof image === "string" ? image : URL.createObjectURL(image);
        if (typeof image !== "string") previewUrls.push(source);
        const thumbnail = document.createElement("img");
        thumbnail.src = source;
        thumbnail.alt = "Xem trước ảnh hoa tải lên";
        preview.append(thumbnail);
      }
    }

    async function compressImage(file) {
      if (!file.type.startsWith("image/")) throw new Error("Chỉ nhận tệp ảnh.");
      if (file.size > 12 * 1024 * 1024) throw new Error("Mỗi ảnh cần nhỏ hơn 12 MB.");
      const bitmap = await createImageBitmap(file);
      const scale = Math.min(1, 1400 / Math.max(bitmap.width, bitmap.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(bitmap.width * scale));
      canvas.height = Math.max(1, Math.round(bitmap.height * scale));
      const context = canvas.getContext("2d");
      context.fillStyle = "#fff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      bitmap.close();
      return canvas.toDataURL("image/jpeg", 0.78);
    }

    function renderGeographicLink(flower) {
      const hasCoordinates = Number.isFinite(Number(flower.latitude)) && Number.isFinite(Number(flower.longitude)) && flower.latitude !== "" && flower.longitude !== "";
      const place = flower.locality || flower.origin || "";
      const href = hasCoordinates
        ? `https://www.openstreetmap.org/?mlat=${encodeURIComponent(flower.latitude)}&mlon=${encodeURIComponent(flower.longitude)}#map=11/${encodeURIComponent(flower.latitude)}/${encodeURIComponent(flower.longitude)}`
        : `https://www.openstreetmap.org/search?query=${encodeURIComponent(place)}`;
      const coordinateLabel = hasCoordinates ? `${escapeHtml(flower.latitude)}, ${escapeHtml(flower.longitude)} · ` : "";
      return `${coordinateLabel}${escapeHtml(place || "Chưa ghi nhận")} ${place || hasCoordinates ? `<a class="geo-link" href="${href}" target="_blank" rel="noopener noreferrer">Bản đồ ↗</a>` : ""}`;
    }

    function viewingRecommendation(flower) {
      if (flower.bloomPlace) return { text: flower.bloomPlace, verified: true };
      if (bloomPlaces[flower.id]) return { text: bloomPlaces[flower.id], verified: true };
      const location = flower.locality || flower.origin || "";
      return { text: location ? `Gợi ý quan sát tại ${location}, trong sinh cảnh ${flower.habitat || "phù hợp với loài"} (${flower.season || "mùa nở tùy địa phương"})` : "Chưa có địa điểm ngắm hoa được xác minh.", verified: false };
    }

    function mapLink(place, latitude, longitude, label = "Mở bản đồ ↗") {
      const hasCoordinates = latitude !== null && latitude !== undefined && longitude !== null && longitude !== undefined && latitude !== "" && longitude !== "" && Number.isFinite(Number(latitude)) && Number.isFinite(Number(longitude));
      if (!hasCoordinates && !place) return "";
      const href = hasCoordinates
        ? `https://www.openstreetmap.org/?mlat=${encodeURIComponent(latitude)}&mlon=${encodeURIComponent(longitude)}#map=12/${encodeURIComponent(latitude)}/${encodeURIComponent(longitude)}`
        : `https://www.openstreetmap.org/search?query=${encodeURIComponent(place)}`;
      return `<a class="geo-link" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    }

    function activateView(view) {
      const isExpert = view === "expert";
      publicView.hidden = isExpert;
      expertView.hidden = !isExpert;
      document.querySelector(".header-actions").hidden = isExpert;
      document.querySelectorAll("[data-view]").forEach(button => {
        const isActive = button.dataset.view === view;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
      if (isExpert) {
        updateFlowerOptions();
        renderContributionList();
      } else renderFlowers();
    }

    expertModeButtons.forEach(button => button.addEventListener("click", () => setExpertMode(button.dataset.entryMode)));
    expertFlowerSelect.addEventListener("change", () => fillExpertForm(flowers.find(flower => flower.id === expertFlowerSelect.value)));
    document.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => activateView(button.dataset.view)));
    expertImages.addEventListener("change", () => {
      const files = [...expertImages.files];
      if (files.length > 4) {
        expertImages.value = "";
        document.querySelector("#form-message").textContent = "Mỗi bản ghi nhận tối đa 4 ảnh.";
        renderImagePreview([]);
        return;
      }
      renderImagePreview(files);
      document.querySelector("#form-message").textContent = "";
    });

    expertForm.addEventListener("submit", async event => {
      event.preventDefault();
      const message = document.querySelector("#form-message");
      const values = Object.fromEntries(new FormData(expertForm).entries());
      const targetId = expertMode === "update" ? expertFlowerSelect.value : "";
      const existing = targetId ? flowers.find(flower => flower.id === targetId) : null;
      if (expertMode === "update" && !existing) {
        message.textContent = "Hãy chọn loài cần cập nhật.";
        return;
      }
      message.textContent = "Đang xử lý ảnh…";
      try {
        const files = [...expertImages.files].slice(0, 4);
        const imageData = await Promise.all(files.map(compressImage));
        const labels = { garden: "Hoa vườn", tropical: "Nhiệt đới", wild: "Hoa dại", seasonal: "Theo mùa" };
        const swatches = { garden: "#c45762", tropical: "#d28c45", wild: "#6883a4", seasonal: "#cfaa48" };
        const sourceUrl = /^https?:\/\//i.test(String(values.sourceUrl || "")) ? String(values.sourceUrl).trim() : existing?.sourceUrl || "";
        const record = {
          ...existing,
          id: existing?.id || `expert-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          name: String(values.name).trim(),
          latin: String(values.latin).trim(),
          wikiTitle: existing?.wikiTitle || "",
          group: values.group || "garden",
          label: labels[values.group] || "Đóng góp",
          color: String(values.color || "").trim() || existing?.color || "Chưa ghi nhận",
          family: String(values.family || "").trim() || existing?.family || "",
          genus: String(values.genus || "").trim() || existing?.genus || "",
          growthForm: String(values.growthForm || "").trim() || existing?.growthForm || "",
          swatch: existing?.swatch || swatches[values.group] || "#68836f",
          description: String(values.description).trim(),
          origin: String(values.origin).trim(),
          locality: String(values.locality || "").trim(),
          bloomPlace: String(values.bloomPlace || "").trim() || existing?.bloomPlace || "",
          latitude: values.latitude === "" ? null : Number(values.latitude),
          longitude: values.longitude === "" ? null : Number(values.longitude),
          habitat: String(values.habitat || "").trim() || existing?.habitat || "Chưa ghi nhận",
          season: String(values.season || "").trim() || existing?.season || "Chưa ghi nhận",
          height: String(values.height || "").trim(),
          altitude: String(values.altitude || "").trim(),
          temperature: String(values.temperature || "").trim(),
          soil: String(values.soil || "").trim(),
          light: String(values.light || "").trim(),
          moisture: String(values.moisture || "").trim(),
          meaning: String(values.meaning || "").trim() || existing?.meaning || "Chưa ghi nhận",
          imageCredit: String(values.imageCredit || "").trim(),
          sourceUrl,
          images: imageData.length ? imageData : existing?.images || [],
          thumbnail: imageData[0] || existing?.thumbnail || "",
          expertContribution: true
        };
        upsertFlower(record);
        const contributionIndex = contributions.findIndex(item => item.id === record.id);
        if (contributionIndex >= 0) contributions[contributionIndex] = record;
        else contributions.push(record);
        const persisted = persistContributions();
        updateFlowerOptions();
        expertFlowerSelect.value = record.id;
        renderContributionList();
        renderFlowers();
        message.textContent = persisted
          ? "Đã lưu trên thiết bị này và cập nhật danh mục tra cứu."
          : "Đã cập nhật phiên hiện tại nhưng bộ nhớ trình duyệt đã đầy; hãy giảm số ảnh rồi thử lại.";
        if (expertMode === "new") {
          expertForm.reset();
          renderImagePreview([]);
        } else fillExpertForm(record);
      } catch (error) {
        message.textContent = error.message || "Không xử lý được ảnh. Vui lòng thử tệp khác.";
      }
    });

    document.querySelector("#export-data").addEventListener("click", () => {
      const backup = new Blob([JSON.stringify({ format: 1, exportedAt: new Date().toISOString(), records: contributions }, null, 2)], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(backup);
      link.download = "hoa-dia-cau-du-lieu-chuyen-gia.json";
      link.click();
      URL.revokeObjectURL(link.href);
    });

    document.querySelector("#import-data").addEventListener("change", async event => {
      const file = event.target.files[0];
      if (!file) return;
      try {
        const imported = JSON.parse(await file.text());
        const records = Array.isArray(imported) ? imported : imported.records;
        if (!Array.isArray(records)) throw new Error("Tệp không chứa danh sách bản ghi hợp lệ.");
        let accepted = 0;
        for (const item of records) {
          if (!item.id || !item.name || !item.latin || !item.origin) continue;
          const record = { ...item, images: Array.isArray(item.images) ? item.images.filter(image => typeof image === "string" && image.startsWith("data:image/")).slice(0, 4) : [] };
          record.thumbnail ||= record.images[0] || "";
          record.sourceUrl = /^https?:\/\//i.test(record.sourceUrl || "") ? record.sourceUrl : "";
          upsertFlower(record);
          const index = contributions.findIndex(existing => existing.id === record.id);
          if (index >= 0) contributions[index] = record;
          else contributions.push(record);
          accepted++;
        }
        const persisted = persistContributions();
        updateFlowerOptions();
        renderContributionList();
        renderFlowers();
        document.querySelector("#form-message").textContent = `${accepted} bản ghi đã nhập${persisted ? " và lưu trên thiết bị này." : "; bộ nhớ trình duyệt đã đầy."}`;
      } catch (error) {
        document.querySelector("#form-message").textContent = error.message || "Không đọc được tệp JSON.";
      } finally {
        event.target.value = "";
      }
    });

    searchInput.addEventListener("input", () => {
      clearTimeout(searchTimer);
      wikiState.query = searchInput.value.trim();
      wikiState.requestId++;
      wikiState.items = [];
      wikiState.continuation = null;
      wikiState.loading = false;
      wikiState.error = "";
      if (!wikiState.query) {
        renderFlowers();
        return;
      }
      renderWikipediaResults();
      searchTimer = setTimeout(() => searchWikipedia(), 350);
    });
    wikiLanguage.addEventListener("change", () => { if (wikiState.query) searchWikipedia(); });
    loadMoreButton.addEventListener("click", () => searchWikipedia(true));
    document.querySelector("#sort-select").addEventListener("change", renderFlowers);
    categoryButtons.forEach(button => button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      categoryButtons.forEach(item => item.classList.toggle("active", item === button));
      renderFlowers();
    }));
    favoritesToggle.addEventListener("click", () => {
      favoritesOnly = !favoritesOnly;
      favoritesToggle.classList.toggle("is-active", favoritesOnly);
      favoritesToggle.setAttribute("aria-pressed", String(favoritesOnly));
      renderFlowers();
    });
    document.querySelector("#dialog-close").addEventListener("click", closeDetails);
    dialogBackdrop.addEventListener("click", event => { if (event.target === dialogBackdrop) closeDetails(); });
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeDetails(); });
    restoreContributions();
    loadFeaturedImages();
    renderFlowers();
