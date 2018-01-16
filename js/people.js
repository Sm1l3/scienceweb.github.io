function getPeople() {
		$.get('people.html', function(data) {
			$(data).find('person').each(function(){
					var $people = $(this);
					$name = $people.attr('name');
					$age = $people.find('age').text();
					$picture = $people.find('picture').text();
					$gender = $people.find('name').text();
					$recipient = $people.find('name').text();
					$time = $people.find('time').text();
					$description = $people.find('description').text();
					$profile = $people.find('profile').text();
					
					var htmlOutput = "";
					htmlOutput += "<li class='peopleItem'><div class='peopleDiv'>";
					htmlOutput += "<img class='peopleImg' src='"+ $picture +"' />";
					htmlOutput += "<div class='peopleDescription'>";
					htmlOutput += "<div class='peopleName'>" + $name + "</div>";
					htmlOutput += "<div class='peopleTime'>" + $age + " yrs old</div>";
					htmlOutput += "<div class='peopleText'>" + $description + "</div>";
					htmlOutput += "<div class='peopleHR'></div>";
					htmlOutput += "<a class='peopleA' href='"+ $profile +"'>View Profile &raquo;</a>";
					htmlOutput += "</div>";
				
					htmlOutput += "<div class='clear'></div></div></li>";
					$(".people").append(htmlOutput);
			})
		});
}


function getInterviews(thePerson, theXML)
{
	$.get(theXML, function(data) {
			$(data).find('person').each(function(){
					var $people = $(this);
					$name = $people.attr('name');
					$age = $people.find('age').text();
					$picture = $people.find('picture').text();
					$gender = $people.find('name').text();
					$recipient = $people.find('name').text();
					$time = $people.find('time').text();
					$description = $people.find('description').text();
					$profile = $people.find('profile').text();

					if(thePerson == $name)
					{
						var htmlOutput = "";
						htmlOutput += "<li>";
						
						if(window.location.href.indexOf("../../../fr/index-2.html") > -1)
						{
							htmlOutput += "<a target='_parent' style='float:right;' href='"+ $profile +"'>Voir le Profil</a>";
							htmlOutput += "<span>Plus de clips par " + $name + "</span>";
						}
						else
						{
							htmlOutput += "<a target='_parent' style='float:right;' href='"+ $profile +"'>View Profile</a>";
							htmlOutput += "<span>More clips by " + $name + "</span>";
						}
						
						htmlOutput += "</li>";
						$people.find('interview').each(function() {
							
							htmlOutput += "<li>";
							htmlOutput += "<a href='"+ $(this).attr('url') +"'>" + $(this).text() + "</a>";
							htmlOutput += "</li>";
							
						});
						
						$(".more").append(htmlOutput);
						
					}
					
					
					
			})
		});
}


function getProfileInterviews(thePerson, theXML)
{
	$.get(theXML, function(data) {
			$(data).find('person').each(function(){
					var $people = $(this);
					$name = $people.attr('name');
					$age = $people.find('age').text();
					$picture = $people.find('picture').text();
					$gender = $people.find('name').text();
					$recipient = $people.find('name').text();
					$time = $people.find('time').text();
					$description = $people.find('description').text();
					$profile = $people.find('profile').text();

					if(thePerson == $name)
					{
						var htmlOutput = "";
						htmlOutput += "<tr><th>";
						if(window.location.href.indexOf("../../../fr/index-2.html") > -1)
						{
							htmlOutput += "Plus de clips par " + $name;
						}
						else
						{
							htmlOutput += "More clips by " + $name;
						}
						htmlOutput += "</th></tr>";
						$people.find('interview').each(function() {
							
							htmlOutput += "<tr><td>";
							
							htmlOutput += "<a class='sectionNavA' href=\"javascript:shadowPopup('',922,630, '" + $(this).attr('url')+ "'); void(0);\"><img src='/en/images/play.png'>" + $(this).text() + "</a>";
							htmlOutput += "</td></tr>";
							
						});
						
						$(".more").append(htmlOutput);
						
					}
					
					
					
			})
		});
}

function filterChange()
{
	$(".people").html("");
	
	$.get('people.html', function(data) {
		$(data).find('person').each(function(){
			
				var $people = $(this);
				$name = $people.attr('name');
				$age = $people.find('age').text();
				$picture = $people.find('picture').text();
				$gender = $people.find('gender').text();
				$recipient = $people.find('recipient').text();
				$time = $people.find('time').text();
				$description = $people.find('description').text();
				$profile = $people.find('profile').text();
				
				$filterGender = $("#filterGender").val();
				$filterAge = $("#filterAge").val().split('.');
				$filterRecipient = $("#filterRecipient").val();
				$filterTime = $("#filterTime").val().split('.');
				
				if(($filterGender == $gender) || ($filterGender == "Select"))
				{
					if(($age >= parseInt($filterAge[0]) && $age <= parseInt($filterAge[1])) || ($filterAge == "Select"))
					{
						if(($filterRecipient == $recipient) || ($filterRecipient == "Select"))
						{
							if(($time >= parseInt($filterTime[0]) && $time <= parseInt($filterTime[1])) || ($filterTime == "Select"))
							{
								var htmlOutput = "";
								htmlOutput += "<li class='peopleItem'><div class='peopleDiv'>";
								htmlOutput += "<img class='peopleImg' src='"+ $picture +"' />";
								htmlOutput += "<div class='peopleDescription'>";
								htmlOutput += "<div class='peopleName'>" + $name + "</div>";
								htmlOutput += "<div class='peopleTime'>" + $age + " yrs old</div>";
								htmlOutput += "<div class='peopleText'>" + $description + "</div>";
								htmlOutput += "<div class='peopleHR'></div>";
								htmlOutput += "<a class='peopleA' href='"+ $profile +"'>View Profile &raquo;</a>";
								htmlOutput += "</div>";
							
								htmlOutput += "<div class='clear'></div></div></li>";
								$(".people").append(htmlOutput);
							}
						}
					}
				}

		})
	});
}


