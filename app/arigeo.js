module.exports = {	
	aritGeo: function(list) {
		function isArithmetic(list) {
			var counter = 1;
			var diff = list[0] - list[1]
			while (counter < list.length - 1)
			{
				if ((list[counter] - list[counter + 1]) != diff)
					return false;
				counter += 1;
			}
			return true;
		}

		function isGeometric(list) {
			var counter = 1;
			var ratio = list[0] / list[1]
			while (counter < list.length - 1)
			{
				if ((list[counter] / list[counter + 1]) != ratio)
					return false;
				counter += 1;
			}
			return true;
		}

		if(list.length == 0)
			return 0;
		else if (isArithmetic(list))
			return "Arithmetic";
		else if (isGeometric(list))
			return "Geometric";
		else
			return -1;
	}

}