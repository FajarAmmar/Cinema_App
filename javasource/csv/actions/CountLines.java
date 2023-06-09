// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package csv.actions;

import java.io.InputStreamReader;
import com.mendix.core.Core;
import com.mendix.logging.ILogNode;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import com.opencsv.CSVParser;
import com.opencsv.CSVParserBuilder;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import csv.impl.CSV;
import com.mendix.systemwideinterfaces.core.IMendixObject;

/**
 * This action will import a CSV.
 */
public class CountLines extends CustomJavaAction<java.lang.Long>
{
	private IMendixObject __file;
	private system.proxies.FileDocument file;
	private java.lang.Long skipLines;

	public CountLines(IContext context, IMendixObject file, java.lang.Long skipLines)
	{
		super(context);
		this.__file = file;
		this.skipLines = skipLines;
	}

	@java.lang.Override
	public java.lang.Long executeAction() throws Exception
	{
		this.file = this.__file == null ? null : system.proxies.FileDocument.initialize(getContext(), __file);

		// BEGIN USER CODE
		Long counter = 0L;
		ILogNode logger = CSV.getLogger();
		
		logger.debug("Opening CSV file..");
		
		CSVParserBuilder parserBuilder = new CSVParserBuilder();
		CSVParser parser = parserBuilder.build();
		
		CSVReader reader = new CSVReaderBuilder(new InputStreamReader(Core.getFileDocumentContent(getContext(), this.file.getMendixObject())))
				.withSkipLines((int) skipLines.intValue())
				.withCSVParser(parser)
				.build();
		
		while(reader.readNext() != null) {
			counter++;
		}
		
		return counter;
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "CountLines";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
